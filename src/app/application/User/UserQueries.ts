import { inject, injectable } from "tsyringe";
import IUserQueries from "@/app/application/Interfaces/IuserQueries";
import IUserRepository from "@/app/domain/interfaces/repositories/IuserRepository";
import IUser from "@/app/domain/entities/IUser";

@injectable()
export default class UserQueries implements IUserQueries {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

  async GetUserByEmail(email: string): Promise<IUser> {
    return this.userRepository.FetchUserAsync(email);
  }
}
