export default interface IBaseService {
  handle: (param?: any) => Promise<any>;
}
