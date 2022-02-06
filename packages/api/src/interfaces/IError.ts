/* Api error model */
export default interface IError {
  /* Text Message */
  message: string;

  /* Status (for different error levels) */
  status: number;

  /* Raw Error */
  raw: Error;
}
