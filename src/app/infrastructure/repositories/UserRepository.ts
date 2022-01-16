import { injectable } from "tsyringe";
import IUserRepository from "@/app/domain/interfaces/repositories/IUserRepository";
import store from "@/app/store";
import { ApiClient } from "@/app/core/api/ApiClient";
import { UserAPI } from "@/app/infrastructure/api/User/User";
import IUser from "@/app/domain/entities/IUser";
import PushUserRequest from "@/app/infrastructure/requests/User/PushUserRequest";

@injectable()
export default class UserRepository implements IUserRepository {
  async AddAsync(user: IUser): Promise<any> {
    try {
      await store.dispatch("UserStore/AddAsync", user);
      return this.Get() === user;
    } catch (error) {
      return false;
    }
  }

  PushUserAsync(): Promise<boolean> {
    // Get User from store;
    const user: IUser = this.Get();
    const request: PushUserRequest = new PushUserRequest({
      Email: user.Email,
      Password: user.Password,
      // Now password should be equals.
      PasswordConfirmation: user.Password,
    });
    return ApiClient.shared.request(new UserAPI.PushUser(request));
  }

  DeleteAsync(entity: IUser): Promise<any> {
    return Promise.resolve(undefined);
  }

  Get(): IUser {
    return store.getters["UserStore/getUser"];
  }

  PushLoginUserAsync(): Promise<any> {
    // Get User from store;
    const user: IUser = this.Get();
    return ApiClient.shared.request(new UserAPI.LoginUser(user));
  }

  UpdateAsync(entity: IUser): Promise<any> {
    return Promise.resolve(undefined);
  }

  FetchUserAsync(email: string): Promise<IUser> {
    // Get User from network;
    return ApiClient.shared.request(new UserAPI.FetchUserByEmail({ email }));
  }
}
