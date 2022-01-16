export default class ValidationResult {
  // Erros.
  Errors: any[];

  // Whether validation succeeded.
  IsValid() {
    return this.Errors.length > 0;
  }
}
