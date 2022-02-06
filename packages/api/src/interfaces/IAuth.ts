import IToken from "./IToken";

/* Authorize model */
export default interface IAuth {
  /* If true set token to header */
  authorize: boolean;

  /* Authorize token */
  token: IToken;
}
