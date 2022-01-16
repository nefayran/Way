import { injectable } from "tsyringe";
import IBaseService from "@/app/core/services/IBaseService";
import IError from "@/app/core/usecases/IError";

export interface IErrorService extends IBaseService {
  context?: any;
}

@injectable()
export default class ErrorService implements IBaseService {
  context: any;

  constructor() {
    this.context = "Application";
  }

  async handle(error: any): Promise<Array<IError>> {
    console.log(`Errors context: ${this.context}`);
    console.log(error);
    const errors: Array<IError> = [];
    if (error.status === 400) {
      error.raw.response.data.forEach((e: any) => {
        const iError: IError = {
          Id: "something id",
          Type: 0,
          Message: e,
        };
        errors.push(iError);
      });
    }
    if (error.status === 415) {
      const iError: IError = {
        Id: "something id",
        Type: 0,
        Message: "Not a supported data type",
      };
      errors.push(iError);
    }
    if (error.status === 409) {
      const iError: IError = {
        Id: "something id",
        Type: 0,
        Message: "Conflict",
      };
      errors.push(iError);
    }
    if (error.status === undefined) {
      const iError: IError = {
        Id: "something id",
        Type: 0,
        Message: "Unspecified error",
      };
      errors.push(iError);
    }
    return new Promise((resolve, reject) => {
      resolve(errors);
    });
  }
}
