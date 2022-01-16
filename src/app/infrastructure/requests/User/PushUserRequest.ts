export default class PushUserRequest {
  Email: string;

  Password: string;

  PasswordConfirmation: string;

  public constructor(init?: Partial<PushUserRequest>) {
    Object.assign(this, init);
  }
}
