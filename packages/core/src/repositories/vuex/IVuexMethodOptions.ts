/* Options method for customisation function call */
import IRepositoryMethodOptions from "../IRepositoryMethodOptions";

export default interface IVuexMethodOptions extends IRepositoryMethodOptions {
  /* for use custom name of vuex methods */
  [name: string]: any;
  /* for cancel default rules check */
  force?: boolean;
  /* vuex action/getter */
  type?: string;
}
