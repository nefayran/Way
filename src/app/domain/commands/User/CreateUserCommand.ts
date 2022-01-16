import { IsNotEmpty, MaxLength, MinLength, Matches } from "class-validator";
import { Match } from "@/app/domain/decorators/MathDecorator";
import UserCommandBase from "./UserCommandBase";

export default class CreateUserCommand extends UserCommandBase {
  @IsNotEmpty({ message: "Please enter the password" })
  public Password: string;

  @IsNotEmpty({ message: "Please enter the password" })
  @MinLength(6, { message: "Password must be at least 6 characters" })
  @MaxLength(20, { message: "Password too long (max 20 characters)" })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "Password too weak",
  })
  @Match("Password", {
    message: "Confirmation password and password are equal",
  })
  public PasswordConfirmation: string;

  public constructor(init?: Partial<CreateUserCommand>) {
    super();
    Object.assign(this, init);
  }
}
