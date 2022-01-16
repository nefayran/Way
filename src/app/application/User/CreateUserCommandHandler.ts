import { injectable, inject } from "tsyringe";
import ICommandHandlerBase from "@/app/core/commands/ICommandHandlerBase";
import IUserRepository from "@/app/domain/interfaces/repositories/IUserRepository";
import IUser from "@/app/domain/entities/IUser";
import Result from "@/app/core/commands/Result";
import IValidator from "@/app/core/commands/IValidator";
import CreateUserCommand from "@/app/domain/commands/User/CreateUserCommand";
import ValidationResult from "@/app/core/commands/ValidationResult";
import IBaseService from "@/app/core/services/IBaseService";
/*
 * Command handler resolution:
 * CAS: 1 command 1 action 1 side
 * Add and push can be one 1 command
 * Update and push update can be one 1 command
 * ... other commands are similar
 * Add/Delete/Get/Update work with store.
 * Push/RequestDelete/Fetch/RequestUpdate work with server.
 * Command always return Result.
 * */
@injectable()
export default class CreateUserCommandHandler implements ICommandHandlerBase {
  constructor(
    @inject("CreateUserCommandValidator") private createUserCommandValidator: IValidator<CreateUserCommand>,
    @inject("UserRepository") private userRepository: IUserRepository,
    @inject("GuidService") private guidService: IBaseService
  ) {}

  async handle(command: CreateUserCommand) {
    const result = new Result(true, []);
    // Validation.
    const validationResult: ValidationResult = await this.createUserCommandValidator.ValidateAsync(command);
    if (validationResult.Errors.length > 0) {
      result.Errors = validationResult.Errors;
      return result;
    }
    // Create entity.
    const user: IUser = Object.freeze({
      Id: await this.guidService.handle(),
      Email: command.Email,
      Password: command.Password,
    });
    // If you add entity to store use Entity argument.
    const addToRepositoryResult = await this.userRepository.AddAsync(user);
    // Actions with server should be without arguments.
    const pushUserResult = await this.userRepository.PushUserAsync();
    // Return Result.
    return result;
  }
}
