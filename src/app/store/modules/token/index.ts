import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from "vuex";
import * as types from "./types";
import IToken from "@/app/domain/entities/IToken";
import { RootState } from "@/app/store";

// State interface.
export interface TokenState {
  Token: IToken | null;
}

// State.
const state = {
  Token: null,
};

// Context.
type TokenContext = ActionContext<TokenState, RootState>;

// Getters.
const getters: GetterTree<TokenState, RootState> = {
  getToken: (state) => {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    }
    return state.Token;
  },
};

// Mutations.
const mutations: MutationTree<TokenState> = {
  [types.ADD_TOKEN](state: TokenState, payload: IToken) {
    state.Token = payload;
    localStorage.setItem("token", payload.Token);
  },
};

// Actions.
const actions: ActionTree<TokenState, RootState> = {
  async AddAsync(context: TokenContext, Token: IToken) {
    context.commit(types.ADD_TOKEN, Token);
  },
};

export const store: Module<TokenState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
