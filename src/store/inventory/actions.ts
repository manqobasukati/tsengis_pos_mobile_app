import { ActionTree } from "vuex";

import { StateInterface } from "src/store/state";
import { INVENTORY_MUTATIONS } from "./mutations";

import { InventoryInterface } from "./state";

export enum INVENTORY_ACTIONS {
  STORE_NAME = "store_name",
  SEARCH_TEXT = "search_text"
}

const actions: ActionTree<InventoryInterface, StateInterface> = {
  [INVENTORY_ACTIONS.STORE_NAME](context, payload) {
    context.commit(INVENTORY_MUTATIONS.STORE_NAME, payload);
  },
  [INVENTORY_ACTIONS.SEARCH_TEXT](context, payload) {
    context.commit(INVENTORY_MUTATIONS.SEARCH_TEXT, payload);
  }
};

export default actions;
