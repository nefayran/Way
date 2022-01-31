import {
  Module,
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from "vuex";
import * as types from "./types";
import { RootState } from "@/app/store";
import WBComponentList, { IWBComponent } from "@/app/logic/WBComponentList";

// State interface.
export interface ComponentsState {
  components: Array<any>;
  component?: IWBComponent;
}

// State.
const state: ComponentsState = {
  components: [],
  component: undefined,
};

// Context.
type ComponentsContext = ActionContext<ComponentsState, RootState>;

// Getters.
const getters: GetterTree<ComponentsState, RootState> = {
  getComponents: (state: ComponentsState) => {
    return state.components;
  },
  getComponent: (state: ComponentsState) => {
    return state.component;
  },
};

// Mutations.
const mutations: MutationTree<ComponentsState> = {
  [types.SET_COMPONENTS](state: ComponentsState, payload: Array<any>) {
    state.components = payload;
  },
  [types.SET_COMPONENT](state: ComponentsState, payload: string) {
    state.component = state.components.find((c) => c.name === payload);
  },
};

// Actions.
const actions: ActionTree<ComponentsState, RootState> = {
  async LoadComponents(context: ComponentsContext) {
    const wbComponentList = new WBComponentList();
    context.commit(types.SET_COMPONENTS, wbComponentList.getComponents());
  },
  async SetComponent(context: ComponentsContext, name: string) {
    context.commit(types.SET_COMPONENT, name);
  },
};

export const store: Module<ComponentsState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
