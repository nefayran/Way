import IEntity from "@/app/core/domain/IEntity";

export default interface IUser extends IEntity {
  Email: string;
  Password: string;
}
