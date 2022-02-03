export default class Result {
  public Errors: string[];

  public Success: boolean;

  public constructor(success: boolean, errors: string[]) {
    this.Success = success;
    this.Errors = errors;
  }
}
