import IUseCase from "./IUseCase";

export default class UseCaseBase implements IUseCase {
  execute: (params?: any) => Promise<any>;
}
