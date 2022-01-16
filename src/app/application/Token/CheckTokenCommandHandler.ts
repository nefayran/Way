import { inject, injectable } from "tsyringe";
import ICommandHandlerBase from "@/app/core/commands/ICommandHandlerBase";
import Result from "@/app/core/commands/Result";
import IValidator from "@/app/core/commands/IValidator";
import ValidationResult from "@/app/core/commands/ValidationResult";
import ITokenRepository from "@/app/domain/interfaces/repositories/ITokenRepository";
import CheckTokenCommand from "@/app/domain/commands/Token/CheckTokenCommand";

@injectable()
export default class CheckTokenCommandHandler implements ICommandHandlerBase {
  constructor(
    @inject("CheckTokenCommandValidator") private checkTokenCommandValidator: IValidator<CheckTokenCommand>,
    @inject("TokenRepository") private tokenRepository: ITokenRepository
  ) {}

  async handle(command: CheckTokenCommand) {
    const result = new Result(true, []);
    // Validation.
    const validationResult: ValidationResult = await this.checkTokenCommandValidator.ValidateAsync(command);
    if (validationResult.Errors.length > 0) {
      result.Errors = validationResult.Errors;
      return result;
    }
    // push
    result.Success = await this.tokenRepository.CheckTokenAsync();
    // Return Result.
    return result;
  }
}
