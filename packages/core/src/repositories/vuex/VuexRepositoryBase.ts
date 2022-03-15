import IGuid from "@/domain/GUID/IGuid";
import IVuexRepositoryOptions from "./IVuexRepositoryOptions";
import IVuexMethodOptions from "./IVuexMethodOptions";
import IEntity from "../../domain/IEntity";
import IVuexRepository from "./IVuexRepository";
import IVuexStoreSource from "./IVuexStoreSource";

/* Smart repository based by vuex store with error handling and default methods */
export default class VuexRepositoryBase<T extends IEntity>
  implements IVuexRepository<T>
{
  source: IVuexStoreSource;

  options: IVuexRepositoryOptions = {
    methods: [
      {
        name: "Add",
        force: false,
        type: "action",
      },
      {
        name: "GetById",
        force: false,
        type: "getter",
      },
      {
        name: "GetAll",
        force: false,
        type: "getter",
      },
      {
        name: "DeleteById",
        force: false,
        type: "action",
      },
    ],
  };

  constructor(
    store: IVuexStoreSource,
    options: IVuexRepositoryOptions | null = null
  ) {
    this.source = store;
    if (options) this.options = options;
    this.checkStore();
  }

  /* Check your store for existing actions and getters */
  checkStore() {
    this.options.methods.forEach((method: IVuexMethodOptions) => {
      let errors = "";
      if (method.type === "getter" && !this.source.getters[method.name]) {
        errors += `Initialization repository error. Getter with name ${method.name} not found.\n`;
      }
      if (
        method.type === "action" &&
        !(
          Object.keys(this.source._actions).findIndex(
            (key) => key === method.name
          ) !== -1
        )
      ) {
        errors += `Initialization repository error. Action with name ${method.name} not found.\n`;
      }
      if (errors) throw new Error(errors);
    });
  }

  /* Option builder for local method options */
  buildOptions(
    methodName: string,
    _options?: IVuexMethodOptions
  ): IVuexMethodOptions {
    const localOptions: IVuexMethodOptions | undefined =
      this.options.methods.find((method) => method.name === methodName);
    if (localOptions) {
      if (_options) {
        this.options.methods.forEach((methodOption) => {
          Object.keys(methodOption).forEach((option: any) => {
            if (localOptions && _options[option]) {
              localOptions[option] = _options[option];
            }
          });
        });
      }
      return localOptions;
    }
    throw Error(`Options for method with name ${methodName} not found!`);
  }

  /* Default Add method */
  async Add(entity: T, _options?: IVuexMethodOptions): Promise<T> {
    const options = this.buildOptions("Add", _options);
    if (!entity) {
      throw Error("Element is null or undefined!");
    }
    if (!options.force && this.GetById(entity.id)) {
      throw Error("Element with this id already exists!");
    }
    await this.source.dispatch(options.name, entity);
    return this.GetById(entity.id);
  }

  /* Default Delete by id method */
  async DeleteById(id: IGuid, _options?: IVuexMethodOptions): Promise<IGuid> {
    const options = this.buildOptions("DeleteById", _options);
    if (!this.GetById(id)) {
      throw Error(`Element with id: ${id} is not exists!`);
    }
    await this.source.dispatch(options.name, id);
    return id;
  }

  /* Default Get by id method */
  GetById(id: IGuid, _options?: IVuexMethodOptions): T {
    const options = this.buildOptions("GetById", _options);
    const entity: T = this.source.getters[options.name](id.toString());
    return entity || null;
  }

  /* Default Get all method */
  GetAll(_options?: IVuexMethodOptions): Array<T> {
    const options = this.buildOptions("GetAll", _options);
    let entities: Array<T> = [];
    entities = this.source.getters[options.name];
    return entities;
  }
}
