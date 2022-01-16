import { container, inject, injectable } from "tsyringe";
import BaseUseCase from "@/app/core/usecases/BaseUseCase";
import CreateUserCommand from "@/app/domain/commands/User/CreateUserCommand";
import ErrorService, { IErrorService } from "@/app/services/ErrorService";
import ICommandHandlerBase from "@/app/core/commands/ICommandHandlerBase";
import ValidatorErrorService, { IValidatorErrorService } from "@/app/services/ValidatorErrorService";
import Result from "@/app/core/commands/Result";
import IError from "@/app/core/usecases/IError";

// Registration form.
export interface IRegistrationFields {
  Email: string;

  Password: string;

  PasswordConfirmation: string;
}

// Registration Use Case.
export interface IRegistrationUseCaseResult {
  Success: boolean;
  SuccessMessage?: string;
  ValidationErrors: Array<IError>;
  Errors: Array<IError>;
  // ... something else
}

// Registration Use Case.
export interface IRegistrationUseCase extends BaseUseCase {}

@injectable()
export default class RegistrationUseCase implements IRegistrationUseCase {
  constructor(
    @inject("ErrorService") private errorService: IErrorService,
    @inject("ValidatorErrorService") private validatorErrorService: IValidatorErrorService
  ) {}

  async execute(fields: IRegistrationFields) {
    const result: IRegistrationUseCaseResult = {
      Success: true,
      SuccessMessage: "You have successfully registered and you will be redirected to the login page",
      ValidationErrors: [],
      Errors: [],
    };
    try {
      // Convert Use Case object to command object.
      const createUserCommand: CreateUserCommand = new CreateUserCommand(fields);
      const createUserCommandHandler: ICommandHandlerBase = container.resolve("CreateUserCommandHandler");
      const commandResult: Result = await createUserCommandHandler.handle(createUserCommand);
      // Add Validation Errors to result.
      result.ValidationErrors = await this.validatorErrorService.handle(commandResult.Errors);
    } catch (errors) {
      // Add errors to result.
      result.Errors = await this.errorService.handle(errors);
    }
    // Success.
    if (result.ValidationErrors.length > 0 || result.Errors.length > 0) {
      result.Success = false;
    }
    // Return result.
    return new Promise<IRegistrationUseCaseResult>((resolve, reject) => {
      resolve(result);
    });
  }
}
