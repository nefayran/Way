import { IsNotEmpty, MaxLength, MinLength, Matches } from "class-validator";
import { Match } from "@/app/domain/decorators/MathDecorator";
import UserCommandBase from "./UserCommandBase";

export default class LoginUserCommand extends UserCommandBase {
  @IsNotEmpty({ message: "Please enter the password" })
  public Password: string;

  public constructor(init?: Partial<LoginUserCommand>) {
    super();
    Object.assign(this, init);
  }
}
