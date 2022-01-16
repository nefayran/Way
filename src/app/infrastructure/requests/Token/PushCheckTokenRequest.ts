export default class PushCheckTokenRequest {
  Email: string;

  Token: string;

  public constructor(init?: Partial<PushCheckTokenRequest>) {
    Object.assign(this, init);
  }
}
