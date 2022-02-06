/* API Client, etc axios */
export default interface NetworkClient {
  request: (options: any) => Promise<any>;
}
