import { injectable } from "tsyringe";
import IBaseService from "@/app/core/services/IBaseService";
import IError from "@/app/core/usecases/IError";

export interface IValidatorErrorService extends IBaseService {
  context?: any;
}

@injectable()
export default class ValidatorErrorService implements IValidatorErrorService {
  context: any;

  constructor() {
    this.context = "Validation";
  }

  async handle(error: any): Promise<Array<IError>> {
    const errors: Array<IError> = [];
    // For validator
    error.forEach((error: any) => {
      const values = Object.values(error.constraints);
      values.forEach((constraint: any) => {
        const err: IError = {
          Id: "something id",
          Type: 1,
          Message: constraint,
        };
        errors.push(err);
      });
    });
    return new Promise((resolve, reject) => {
      resolve(errors);
    });
  }
}
