import { injectable } from "tsyringe";
import ITokenRepository from "@//app/domain/interfaces/repositories/ITokenRepository";
import store from "@/app/store";
import IToken from "@/app/domain/entities/IToken";
import { ApiClient } from "@/app/core/api/ApiClient";
import { TokenAPI } from "@/app/infrastructure/api/Token/Token";
import PushCheckTokenRequest from "@/app/infrastructure/requests/Token/PushCheckTokenRequest";

@injectable()
export default class TokenRepository implements ITokenRepository {
  async AddAsync(token: IToken): Promise<any> {
    try {
      await store.dispatch("TokenStore/AddAsync", token);
      return this.Get() === token;
    } catch (error) {
      return false;
    }
  }

  DeleteAsync(entity: IToken): Promise<any> {
    return Promise.resolve(undefined);
  }

  Get(): IToken {
    return store.getters["TokenStore/getToken"];
  }

  UpdateAsync(entity: IToken): Promise<any> {
    return Promise.resolve(undefined);
  }

  CheckTokenAsync(): Promise<boolean> {
    // Get User from store;
    const token: IToken = this.Get();
    const request = new PushCheckTokenRequest({
      email: "test@example.com",
      token,
    });
    return ApiClient.shared.request(new TokenAPI.PushCheckToken(request));
  }
}
