/* Just declare request class with your data */
export default class ExampleRequest {
  Data: string;

  public constructor(init?: Partial<ExampleRequest>) {
    Object.assign(this, init);
  }
}
