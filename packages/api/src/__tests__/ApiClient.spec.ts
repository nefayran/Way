import INetworkClient from "../interfaces/INetworkClient";
import IRequest from "../interfaces/IRequest";
import ApiClient from "../ApiClient";
import { HttpMethod } from "../HttpMethod";
import IAuth from "../interfaces/IAuth";
import IToken from "../interfaces/IToken";

const promiseMe = (result: any, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result instanceof Error || result.startsWith("Error")) {
        reject(result);
      } else {
        resolve(result);
      }
    }, timeout);
  });
};

describe("ApiClient", () => {
  const errorMessage = "Error";
  const mockClient: INetworkClient = {
    request(options: any): Promise<any> {
      return promiseMe("Test value");
    },
  };
  const errorMockClient: INetworkClient = {
    request(options: any): Promise<any> {
      return promiseMe(errorMessage);
    },
  };
  const request: IRequest<boolean> = {
    params: "test",
    response: true,
    path: "test",
    method: HttpMethod.GET,
    auth: <IAuth>{
      authorize: true,
      token: <IToken>{
        value: "",
        type: "",
      },
    },
  };
  // Default client.
  const api = new ApiClient("http://localhost:8080", mockClient);
  // Error client.
  const apiError = new ApiClient("http://localhost:8080", errorMockClient);
  test("request", async () => {
    const result = await api.request(request);
    expect(result).toBe("Test value");
  });
  test("authorize", async () => {
    request.auth.authorize = false;
    const result = await api.request(request);
    expect(result).toBe("Test value");
  });
  it("rejects", async () => {
    const expected = {
      status: undefined,
      message: undefined,
      raw: errorMessage,
    };
    await expect(apiError.request(request)).rejects.toEqual(expected);
  });
});
