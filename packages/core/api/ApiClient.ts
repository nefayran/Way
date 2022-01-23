import axios from "axios";
import { NetworkClient } from "./NetworkClient";
import { ApiResponse } from "./ApiResponse";
import { ApiRequest } from "./ApiRequest";
import { ApiError } from "./ApiError";
import { HttpMethod } from "./HttpMethod";

// APIClient is client class for xhr request
export class ApiClient implements NetworkClient {
  static shared = new ApiClient();

  // Base fqdn for api endpoints
  baseURL: string = "http://localhost:8000/api/v1/";

  // Timeout duration
  timeout: number = 15 * 1000;

  request<U extends ApiResponse>(request: ApiRequest<U>): Promise<U> {
    const isRead = request.method === HttpMethod.GET;

    return new Promise<U>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: !isRead && request.params,
          withCredentials: false,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          headers: ApiClient.createHeaders(request.authorize),
        })
        .then((data: any) => {
          const response = request.parse ? request.parse(data) : ApiClient.parse<U>(data);
          resolve(response);
        })
        .catch((err: any) => {
          const apiError = ApiClient.normalizeError(err);
          reject(apiError);
        });
    });
  }

  // Default parser
  private static parse<U extends ApiResponse>(data: any): U {
    return data;
  }

  // Convert axios error into APIError
  private static normalizeError(error: any): ApiError {
    return {
      status: error.response && error.response.status,
      message: error.message,
      raw: error,
    };
  }

  // Create headers
  private static createHeaders(authorize: boolean): any {
    if (authorize) {
      const token = localStorage.getItem("token");
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return {};
  }
}
