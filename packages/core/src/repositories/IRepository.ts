import IGuid from "../domain/GUID/IGuid";

export default interface IRepository<T> {
  /* Add methods */
  Add: () => T;
  AddAsync: (entity: T) => Promise<T>;
  /* Get methods */
  Get: (guid: IGuid) => T;
  GetAsync: (guid: IGuid) => Promise<T>;
  GetAll: () => Array<T>;
  GetAllAsync: () => Promise<Array<T>>;
  /* Update methods */
  Update: (guid: IGuid) => Promise<T>;
  UpdateAsync: (guid: IGuid) => Promise<T>;
  /* Delete methods */
  Delete: (guid: IGuid) => Promise<T>;
  DeleteAsync: (guid: IGuid) => Promise<T>;
}
