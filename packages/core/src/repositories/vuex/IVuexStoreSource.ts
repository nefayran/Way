/* Data source - vuex store */
import ISource from "../ISource";

export default interface IVuexStoreSource extends ISource {
  dispatch: (action: string, payload: any) => Promise<any>;

  getters: any;

  _actions?: any;
}
