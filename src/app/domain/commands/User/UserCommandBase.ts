import { IsEmail, IsNotEmpty } from "class-validator";
import ICommandBase from "@/app/core/commands/ICommandBase";

export default class UserCommandBase implements ICommandBase {
  @IsEmail()
  @IsNotEmpty()
  public Email: string;
}
