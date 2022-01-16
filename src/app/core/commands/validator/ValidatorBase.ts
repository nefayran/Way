import { validate } from "class-validator";
import IValidator from "@/app/core/commands/IValidator";
import ValidationResult from "@/app/core/commands/ValidationResult";
import ICommandBase from "@/app/core/commands/ICommandBase";

export default class ValidatorBase implements IValidator<ICommandBase> {
  async ValidateAsync(command: ICommandBase): Promise<ValidationResult> {
    const validationResult: ValidationResult = new ValidationResult();
    const result: Promise<ValidationResult> = new Promise((resolve, reject) => {
      resolve(validationResult);
    });
    await validate(command).then((errors) => {
      // Errors is an array of validation errors.
      if (errors.length > 0) {
        validationResult.Errors = errors;
        return result;
      }
      validationResult.Errors = [];
      return result;
    });
    return result;
  }

  Validate(command: ICommandBase): ValidationResult {
    return new ValidationResult();
  }
}
