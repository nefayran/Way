import IToken from "@/app/domain/entities/IToken";

export default interface ITokenQueries {
  GetToken: () => Promise<IToken>;
}
