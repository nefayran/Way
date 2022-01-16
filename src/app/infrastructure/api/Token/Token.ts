import { AxiosResponse } from "axios";
import { ApiRequest } from "@/app/core/api/ApiRequest";
import { HttpMethod } from "@/app/core/api/HttpMethod";
import IToken from "@/app/domain/entities/IToken";
import PushCheckTokenRequest from "@/app/infrastructure/requests/Token/PushCheckTokenRequest";
/*
 * API Resolution:
 * Push + Entity- POST
 * Fetch + Entity- GET
 * RequestUpdate + Entity - UPDATE
 * RequestDelete + Entity - DELETE
 */
export namespace TokenAPI {
  export class PushCheckToken implements ApiRequest<boolean> {
    response: boolean;

    path: "user/check";

    method = HttpMethod.POST;

    authorize = true;

    parse = (data: AxiosResponse) => data.data;

    constructor(public params: PushCheckTokenRequest) {
      this.path = "user/check";
      this.response = false;
    }
  }
}
