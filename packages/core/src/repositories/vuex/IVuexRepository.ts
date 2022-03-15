import IRepository from "../IRepository";
import IEntity from "../../domain/IEntity";
import IVuexMethodOptions from "./IVuexMethodOptions";

export default interface IVuexRepository<T extends IEntity>
  extends IRepository<T> {
  /* check your store for existing actions or getters */
  checkStore: () => void;
  /* options builder for methods */
  buildOptions(
    methodName: string,
    _options?: IVuexMethodOptions
  ): IVuexMethodOptions;
}
