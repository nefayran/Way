import { HttpMethod } from "./HttpMethod";
import { ApiResponse } from "./ApiResponse";

export type ApiRequest<Response extends ApiResponse> = {
  response: Response;
  path: string;
  method: HttpMethod;
  params?: any;
  baseURL?: string;
  authorize: boolean;
  // eslint-disable-next-line no-unused-vars
  parse?: (data: any) => Response;
};
