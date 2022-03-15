import IEntity from "../domain/IEntity";
import IGuid from "../domain/GUID/IGuid";
import ISource from "./ISource";

export default interface IRepository<T extends IEntity> {
  /* Data source for realisation (vuex store, api for etc.) */
  source?: ISource;
  /* Async Add method */
  Add?: (entity: T) => Promise<T>;
  /* Get by guid method */
  GetById?: (id: IGuid) => T;
  /* GetAll method */
  GetAll?: () => Array<T>;
  /* Async Delete by guid methods - return entity */
  DeleteById?: (id: IGuid) => Promise<IGuid>;
}
