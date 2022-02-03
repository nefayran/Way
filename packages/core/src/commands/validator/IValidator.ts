import ValidationResult from "@/app/core/commands/ValidationResult";

export default interface IValidator<Type> {
  Validate: (command: Type) => ValidationResult;

  ValidateAsync: (command: Type) => Promise<ValidationResult>;
}
