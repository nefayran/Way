import IResult from "./interfaces/IResult";

export default class Result implements IResult {
  public Errors: string[];

  public Success: boolean;

  public constructor(success: boolean, errors: string[]) {
    this.Success = success;
    this.Errors = errors;
  }
}
