/* Options for customisation repository */
import IVuexMethodOptions from "./IVuexMethodOptions";
import IRepositoryOptions from "../IRepositoryOptions";

export default interface IVuexRepositoryOptions extends IRepositoryOptions {
  /* Used for vuex modules */
  moduleName?: string;
  /* Methods options */
  methods: Array<IVuexMethodOptions>;
}
