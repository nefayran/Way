import INetworkClient from "./interfaces/INetworkClient";
import IResponse from "./interfaces/IResponse";
import IRequest from "./interfaces/IRequest";
import IError from "./interfaces/IError";
import { HttpMethod } from "./HttpMethod";
import IAuth from "./interfaces/IAuth";
import IApiClient from "./interfaces/IApiClient";

// APIClient is client class for xhr request
export default class ApiClient implements IApiClient {
  // Client for realisation (etc axios)
  client?: INetworkClient;

  // Base uri for api endpoints
  baseURL: string = "http://localhost:8000/";

  // Timeout duration
  timeout: number = 15 * 1000;

  constructor(_baseUrl: string, _client?: INetworkClient) {
    this.baseURL = _baseUrl;
    this.client = _client;
  }

  request<U extends IResponse>(request: IRequest<U>): Promise<U> {
    const isRead = request.method === HttpMethod.GET;

    const params = {
      url: request.path,
      method: request.method,
      params: isRead && request.params,
      data: !isRead && request.params,
      withCredentials: false,
      timeout: this.timeout,
      baseURL: request.baseURL || this.baseURL,
      headers: ApiClient.createHeaders(request.auth),
    };

    return new Promise<U>((resolve, reject) => {
      if (this.client) {
        // For clients lib (etc axios)
        this.client
          .request(params)
          .then((data: any) => {
            const response = request.parse
              ? request.parse(data)
              : ApiClient.parse<U>(data);
            resolve(response);
          })
          .catch((err: any) => {
            const apiError = ApiClient.normalizeError(err);
            reject(apiError);
          });
      }
      // TODO: default fetch
    });
  }

  // Default parser
  private static parse<U extends IResponse>(data: any): U {
    return data;
  }

  // Convert error into APIError
  private static normalizeError(error: any): IError {
    return {
      status: error.response && error.response.status,
      message: error.message,
      raw: error,
    };
  }

  // Create headers
  private static createHeaders(auth: IAuth): any {
    if (auth.authorize) {
      return {
        Authorization: `${auth.token.type} ${auth.token.value}`,
      };
    }
    return {};
  }
}
