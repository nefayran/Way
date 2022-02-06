/* Authorize Token model */
export default interface IToken {
  /* Token Type (etc Bearer) */
  type: string;

  /* Authorize token value */
  value: any;
}
