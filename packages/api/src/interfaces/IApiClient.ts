import INetworkClient from "./INetworkClient";
import IResponse from "./IResponse";
import IRequest from "./IRequest";

export default interface IApiClient {
  /*  Client for realisation (etc axios) */
  client?: INetworkClient;

  /* Base uri for api endpoints */
  baseURL: string;

  /* Timeout duration */
  timeout: number;

  /* Default api request method */
  request: <U extends IResponse>(request: IRequest<U>) => Promise<U>;
}
