import {
  Module,
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from "vuex";
import * as types from "./types";
import { RootState } from "@/app/store";

// State interface.
export interface SettingsState {
  theme: string;
}

// State.
const state: SettingsState = {
  theme: "light",
};

// Context.
type SettingsContext = ActionContext<SettingsState, RootState>;

// Getters.
const getters: GetterTree<SettingsState, RootState> = {
  getTheme: (state: SettingsState) => {
    return state.theme;
  },
};

// Mutations.
const mutations: MutationTree<SettingsState> = {
  [types.SET_THEME](state: SettingsState, payload: string) {
    state.theme = payload;
  },
};

// Actions.
const actions: ActionTree<SettingsState, RootState> = {
  async SetTheme(context: SettingsContext, theme: string) {
    context.commit(types.SET_THEME, theme);
  },
};

export const store: Module<SettingsState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
