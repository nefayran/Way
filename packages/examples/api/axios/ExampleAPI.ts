import { HttpMethod, IAuth, IRequest, IToken } from "@way/api";
import { AxiosResponse } from "axios";

export namespace ExampleAPI {
  export class FetchExample implements IRequest<any> {
    response: string;

    path: "test/example";

    method = HttpMethod.GET;

    auth = <IAuth>{
      authorize: false,
      token: <IToken>{
        value: "test",
        type: "Bearer",
      },
    };

    parse = (data: AxiosResponse) => data.data;

    constructor(public params: { Data: string }) {
      this.path = "test/example";
      this.auth.authorize = false;
    }
  }
}
