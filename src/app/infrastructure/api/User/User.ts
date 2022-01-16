import { AxiosResponse } from "axios";
import { ApiRequest } from "@/app/core/api/ApiRequest";
import { HttpMethod } from "@/app/core/api/HttpMethod";
import PushUserRequest from "@/app/infrastructure/requests/User/PushUserRequest";
import IUser from "@/app/domain/entities/IUser";
/*
 * API Resolution:
 * Push + Entity- POST
 * Fetch + Entity- GET
 * RequestUpdate + Entity - UPDATE
 * RequestDelete + Entity - DELETE
 */
export namespace UserAPI {
  export class PushUser implements ApiRequest<boolean> {
    response: boolean;

    path: "user/create";

    method = HttpMethod.POST;

    authorize: false;

    parse = (data: AxiosResponse) => data.data;

    constructor(public params: PushUserRequest) {
      this.path = "user/create";
      this.response = false;
    }
  }
  export class LoginUser implements ApiRequest<boolean> {
    response: boolean;

    path: "user/login";

    method = HttpMethod.POST;

    parse = (data: AxiosResponse) => data.data;

    constructor(public params: IUser) {
      this.path = "user/login";
      this.response = false;
    }

    authorize: false;
  }
  export class FetchUserByEmail implements ApiRequest<IUser> {
    response: IUser;

    path: "user/fetch";

    method = HttpMethod.GET;

    authorize: true;

    parse = (data: AxiosResponse) => data.data;

    constructor(public params: { email: string }) {
      this.authorize = true;
      this.path = "user/fetch";
    }
  }
}
