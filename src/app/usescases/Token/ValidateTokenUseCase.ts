import { container, inject, injectable } from "tsyringe";
import BaseUseCase from "@/app/core/usecases/BaseUseCase";
import ErrorService, { IErrorService } from "@/app/services/ErrorService";
import ICommandHandlerBase from "@/app/core/commands/ICommandHandlerBase";
import ValidatorErrorService, { IValidatorErrorService } from "@/app/services/ValidatorErrorService";
import Result from "@/app/core/commands/Result";
import IToken from "@/app/domain/entities/IToken";
import CheckTokenCommand from "@/app/domain/commands/Token/CheckTokenCommand";

// Validate TokenUse Case
export interface IValidateTokenUseCase extends BaseUseCase {
  // ... something
}

@injectable()
export default class ValidateTokenUseCase implements IValidateTokenUseCase {
  constructor(
    @inject("ErrorService") private errorService: IErrorService,
    @inject("ValidatorErrorService") private validatorErrorService: IValidatorErrorService
  ) {}

  async execute(token: IToken) {
    let result: boolean = false;
    let commandResult = new Result(false, []);
    if (token) {
      try {
        const checkTokenCommand: CheckTokenCommand = new CheckTokenCommand({ Token: token });
        const checkTokenCommandHandler: ICommandHandlerBase = container.resolve("CheckTokenCommandHandler");
        commandResult = await checkTokenCommandHandler.handle(checkTokenCommand);
        result = commandResult.Success;
      } catch (errors) {
        console.log(await this.errorService.handle(errors));
        localStorage.setItem("token", "");
      }
    }
    // Return result.
    return new Promise<boolean>((resolve, reject) => {
      resolve(result);
    });
  }
}
