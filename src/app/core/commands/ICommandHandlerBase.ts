export default interface ICommandHandlerBase {
  handle: (command: any) => Promise<any>;
}
