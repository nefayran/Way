import { container, inject, injectable } from "tsyringe";
import BaseUseCase from "@/app/core/usecases/BaseUseCase";
import ErrorService, { IErrorService } from "@/app/services/ErrorService";
import ICommandHandlerBase from "@/app/core/commands/ICommandHandlerBase";
import ValidatorErrorService, { IValidatorErrorService } from "@/app/services/ValidatorErrorService";
import Result from "@/app/core/commands/Result";
import IError from "@/app/core/usecases/IError";
import LoginUserCommand from "@/app/domain/commands/User/LoginUserCommand";
import ITokenRepository from "@/app/domain/interfaces/repositories/ITokenRepository";
import IBaseService from "@/app/core/services/IBaseService";

// Login form.
export interface ILoginFields {
  Email: string;

  Password: string;
}

// Login Use Case.
export interface ILoginUseCaseResult {
  Success: boolean;
  ValidationErrors: Array<IError>;
  Errors: Array<IError>;
  // ... something else
}

// Login Use Case.
export interface ILoginUseCase extends BaseUseCase {
  // ... something
}

@injectable()
export default class LoginUseCase implements ILoginUseCase {
  constructor(
    @inject("ErrorService") private errorService: IErrorService,
    @inject("ValidatorErrorService") private validatorErrorService: IValidatorErrorService
  ) {}

  async execute(fields: ILoginFields) {
    const result: ILoginUseCaseResult = {
      Success: false,
      ValidationErrors: [],
      Errors: [],
    };
    let commandResult: Result = { Success: false, Errors: [] };
    try {
      // Convert Use Case object to command object.
      const loginUserCommand: LoginUserCommand = new LoginUserCommand(fields);
      const loginUserCommandHandler: ICommandHandlerBase = container.resolve("LoginUserCommandHandler");
      commandResult = await loginUserCommandHandler.handle(loginUserCommand);
      // Add Validation Errors to result.
      result.ValidationErrors = await this.validatorErrorService.handle(commandResult.Errors);
    } catch (errors) {
      // Add errors to result.
      result.Errors = await this.errorService.handle(errors);
    }
    // Success false.
    if (result.ValidationErrors.length > 0 || result.Errors.length > 0) {
      result.Success = false;
    }
    // Success true.
    result.Success = commandResult.Success;
    // Return result.
    return new Promise<ILoginUseCaseResult>((resolve, reject) => {
      resolve(result);
    });
  }
}
