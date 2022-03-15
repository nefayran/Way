/* Use real vuex store for testing */
import { createStore } from "vuex";
import IEntity from "../../../domain/IEntity";
import IGuid from "../../../domain/GUID/IGuid";
import Guid from "../../../domain/GUID/Guid";
import IVuexStoreSource from "../IVuexStoreSource";

export class TestEntity implements IEntity {
  name: string;

  id: IGuid = new Guid();
}

// declare your own store states
export interface State {
  testEntities: Array<TestEntity>;
}

const state = () => {
  return {
    testEntities: <Array<TestEntity>>[],
  };
};

const mutations = {
  add(state: any, payload: TestEntity) {
    state.testEntities.push(payload);
  },
  delete(state: any, payload: IGuid) {
    state.testEntities.forEach((item: TestEntity, index: number) => {
      if (item.id.isEqual(payload)) state.testEntities.splice(index, 1);
    });
  },
};

const actions = {
  Add({ commit }: { commit: Function }, payload: TestEntity) {
    commit("add", payload);
  },
  DeleteById({ commit }: { commit: Function }, payload: IGuid) {
    commit("delete", payload);
  },
};

const getters = {
  GetById: (state: State) => (id: IGuid) => {
    return state.testEntities.find((item: TestEntity) => item.id.isEqual(id));
  },
  GetAll: (state: State) => {
    return state.testEntities;
  },
};

/* default vuex store for realisation VuexRepositoryBase */
export const testEntitiesStore: IVuexStoreSource = createStore({
  state,
  mutations,
  actions,
  getters,
});

/* default vuex store for realisation VuexRepositoryBase without actions */
export const testEntitiesStoreWithoutAction: IVuexStoreSource = createStore({
  state,
  mutations,
  actions: {},
  getters,
});

/* default vuex store for realisation VuexRepositoryBase without getters */
export const testEntitiesStoreWithoutGetters: IVuexStoreSource = createStore({
  state,
  mutations,
  actions,
  getters: {},
});
