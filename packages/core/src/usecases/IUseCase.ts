/* Use case for realization simple user actions */
export default interface IUseCase {
  execute: (params?: any) => Promise<any>;
}
