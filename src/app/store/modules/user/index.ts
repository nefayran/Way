import {
  Module,
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from "vuex";
import * as types from "./types";
import IUser from "@/app/domain/entities/IUser";
import { RootState } from "@/app/store";

// State interface.
export interface UserState {
  user: IUser | null;
}

// State.
const state = {
  user: null,
};

// Context.
type UserContext = ActionContext<UserState, RootState>;

// Getters.
const getters: GetterTree<UserState, RootState> = {
  getUser: (state) => {
    return state.user;
  },
};

// Mutations.
const mutations: MutationTree<UserState> = {
  [types.ADD_USER](state: UserState, payload: IUser) {
    state.user = payload;
  },
};

// Actions.
const actions: ActionTree<UserState, RootState> = {
  async AddAsync(context: UserContext, user: IUser) {
    context.commit(types.ADD_USER, user);
  },
};

export const store: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
