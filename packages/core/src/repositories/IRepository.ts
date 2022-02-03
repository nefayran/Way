export default interface IRepository<Type> {
  AddAsync: (entity: Type) => Promise<any>;
  UpdateAsync: (entity: Type) => Promise<any>;
  DeleteAsync: (entity: Type) => Promise<any>;
  Get: () => Type;
}
