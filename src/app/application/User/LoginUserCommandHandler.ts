import { injectable, inject } from "tsyringe";
import ICommandHandlerBase from "@/app/core/commands/ICommandHandlerBase";
import IUserRepository from "@/app/domain/interfaces/repositories/IUserRepository";
import IUser from "@/app/domain/entities/IUser";
import Result from "@/app/core/commands/Result";
import IValidator from "@/app/core/commands/IValidator";
import LoginUserCommand from "@/app/domain/commands/User/LoginUserCommand";
import ValidationResult from "@/app/core/commands/ValidationResult";
import JwtToken from "@/app/infrastructure/security/Token/JwtToken";
import ITokenRepository from "@/app/domain/interfaces/repositories/ITokenRepository";
import IToken from "@/app/domain/entities/IToken";
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
export default class LoginUserCommandHandler implements ICommandHandlerBase {
  constructor(
    @inject("LoginUserCommandValidator") private loginUserCommandValidator: IValidator<LoginUserCommand>,
    @inject("UserRepository") private userRepository: IUserRepository,
    @inject("TokenRepository") private tokenRepository: ITokenRepository,
    @inject("GuidService") private guidService: IBaseService
  ) {}

  async handle(command: LoginUserCommand) {
    const result = new Result(true, []);
    // Validation.
    const validationResult: ValidationResult = await this.loginUserCommandValidator.ValidateAsync(command);
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
    await this.userRepository.AddAsync(user); // add
    const loginUserAsyncResult = await this.userRepository.PushLoginUserAsync(); // push
    const token: IToken = {
      Id: await this.guidService.handle(),
      Date: new Date(),
      Token: loginUserAsyncResult.token,
    };
    await this.tokenRepository.AddAsync(Object.freeze(token)); // add
    // Return Result.
    return result;
  }
}
