import { createStore } from "vuex";
import { IGuid, IVuexStoreSource } from "@waykit/core";
import { ExampleEntity } from "@/ExampleEntity";

export interface ExampleState {
  exampleEntities: Array<ExampleEntity>;
}

const state = () => {
  return {
    exampleEntities: <Array<ExampleEntity>>[],
  };
};

const mutations = {
  add(state: any, payload: ExampleEntity) {
    state.exampleEntities.push(payload);
  },
  delete(state: any, payload: IGuid) {
    state.exampleEntities.forEach((item: ExampleEntity, index: number) => {
      if (item.id.isEqual(payload)) state.exampleEntities.splice(index, 1);
    });
  },
};

const actions = {
  Add({ commit }: { commit: Function }, payload: ExampleEntity) {
    commit("add", payload);
  },
  DeleteById({ commit }: { commit: Function }, payload: IGuid) {
    commit("delete", payload);
  },
};

const getters = {
  GetById: (state: ExampleState) => (id: IGuid) => {
    return state.exampleEntities.find((item: ExampleEntity) =>
      item.id.isEqual(id)
    );
  },
  GetAll: (state: ExampleState) => {
    return state.exampleEntities;
  },
};

/* default vuex store for realisation VuexRepositoryBase */
export const exampleEntitiesStore: IVuexStoreSource = createStore({
  state,
  getters,
  actions,
  mutations,
});
