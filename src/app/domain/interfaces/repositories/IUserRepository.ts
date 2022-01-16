import IUser from "@/app/domain/entities/IUser";
import IRepository from "@/app/core/repositories/IRepository";

export default interface IUserRepository extends IRepository<IUser> {
  PushUserAsync: () => Promise<boolean>;
  PushLoginUserAsync: () => Promise<any>;
  FetchUserAsync: (email: string) => Promise<IUser>;
}
