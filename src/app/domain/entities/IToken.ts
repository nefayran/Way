import IEntity from "@/app/core/domain/IEntity";

export default interface IToken extends IEntity {
  Date: Date;
  Token: string;
}
