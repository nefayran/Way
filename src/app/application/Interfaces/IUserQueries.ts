import IUser from "@/app/domain/entities/IUser";

export default interface IUserQueries {
  GetUserByEmail: (email: string) => Promise<IUser>;
}
