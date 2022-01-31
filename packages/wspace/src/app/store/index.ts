import Vuex from "vuex";

import * as settings from "./modules/settings/index";
import * as components from "./modules/components/index";

export interface RootState {
  settings: settings.SettingsState;
  components: components.ComponentsState;
}

export default new Vuex.Store<RootState>({
  modules: {
    SettingsStore: settings.store,
    ComponentsStore: components.store,
  },
});
