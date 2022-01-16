import IRepository from "@/app/core/repositories/IRepository";
import IToken from "@/app/domain/entities/IToken";

export default interface ITokenRepository extends IRepository<IToken> {
  CheckTokenAsync: () => Promise<boolean>;
}
