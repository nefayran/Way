import { HttpMethod } from "../HttpMethod";
import IResponse from "./IResponse";
import IAuth from "./IAuth";

/* API request model */
export default interface IRequest<Response extends IResponse> {
  response: Response;
  path: string;
  method: HttpMethod;
  params?: any;
  baseURL?: string;
  auth: IAuth;
  parse?: (data: any) => Response;
}
