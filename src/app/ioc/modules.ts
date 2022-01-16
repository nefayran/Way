import "reflect-metadata";
import { container } from "tsyringe";
import UserRepository from "@/app/infrastructure/repositories/UserRepository";
import CreateUserCommandHandler from "@/app/application/User/CreateUserCommandHandler";
import CreateUserCommandValidator from "@/app/domain/commands/User/Validators/CreateUserCommandValidator";
import LoginUserCommandHandler from "@/app/application/User/LoginUserCommandHandler";
import LoginUserCommandValidator from "@/app/domain/commands/User/Validators/LoginUserCommandValidator";
import TokenRepository from "@/app/infrastructure/repositories/TokenRepository";
import CheckTokenCommandHandler from "@/app/application/Token/CheckTokenCommandHandler";
import CheckTokenCommandValidator from "@/app/domain/commands/Token/Validators/CheckTokenCommandValidator";
import GuidService from "@/app/services/GuidService";
import UserQueries from "@/app/application/User/UserQueries";
import ErrorService from "@/app/services/ErrorService";
import LoginUseCase from "@/app/usescases/User/LoginUseCase";
import ValidatorErrorService from "@/app/services/ValidatorErrorService";
import RegistrationUseCase from "@/app/usescases/User/RegistrationUseCase";
import ValidateTokenUseCase from "@/app/usescases/Token/ValidateTokenUseCase";

export const setup = () => {
  // Commands.
  container.register("CreateUserCommandHandler", {
    useClass: CreateUserCommandHandler,
  });
  container.register("LoginUserCommandHandler", {
    useClass: LoginUserCommandHandler,
  });
  container.register("CheckTokenCommandHandler", {
    useClass: CheckTokenCommandHandler,
  });

  // Queries.
  container.register("UserQueries", {
    useClass: UserQueries,
  });

  // Repositories.
  container.register("UserRepository", {
    useClass: UserRepository,
  });
  container.register("TokenRepository", {
    useClass: TokenRepository,
  });

  // Validators.
  container.register("CreateUserCommandValidator", {
    useClass: CreateUserCommandValidator,
  });
  container.register("LoginUserCommandValidator", {
    useClass: LoginUserCommandValidator,
  });
  container.register("CheckTokenCommandValidator", {
    useClass: CheckTokenCommandValidator,
  });

  // Services.
  container.register("ErrorService", {
    useClass: ErrorService,
  });
  container.register("ValidatorErrorService", {
    useClass: ValidatorErrorService,
  });
  container.register("GuidService", {
    useClass: GuidService,
  });

  // Uses Cases
  container.register("LoginUseCase", {
    useClass: LoginUseCase,
  });
  container.register("RegistrationUseCase", {
    useClass: RegistrationUseCase,
  });
  container.register("ValidateTokenUseCase", {
    useClass: ValidateTokenUseCase,
  });
};
