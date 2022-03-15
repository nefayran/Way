/* Authorize model */
export default interface IResult {
  /* Result Id */
  id: GUID;

  /* Authorize token */
  token: IToken;
}
