import Vuex from "vuex";

import * as user from "./modules/user/index";
import * as token from "./modules/token/index";

export interface RootState {
  user: user.UserState;
  token: token.TokenState;
}

export default new Vuex.Store<RootState>({
  modules: {
    UserStore: user.store,
    TokenStore: token.store,
  },
});
