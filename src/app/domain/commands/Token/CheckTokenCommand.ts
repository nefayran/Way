import { IsNotEmpty } from "class-validator";
import ICommandBase from "@/app/core/commands/ICommandBase";

export default class CheckTokenCommand implements ICommandBase {
  @IsNotEmpty()
  public Token: string;

  public constructor(init?: Partial<CheckTokenCommand>) {
    Object.assign(this, init);
  }
}
