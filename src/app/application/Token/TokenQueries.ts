import ITokenQueries from "@/app/application/Interfaces/ITokenQueries";
import ITokenRepository from "@/app/domain/interfaces/repositories/ITokenRepository";
import IToken from "@/app/domain/entities/IToken";

export default class TokenQueries implements ITokenQueries {
  tokenRepository: ITokenRepository;

  constructor(tokenRepository: ITokenRepository) {
    this.tokenRepository = tokenRepository;
  }

  async GetToken(): Promise<IToken> {
    return this.tokenRepository.Get();
  }
}
