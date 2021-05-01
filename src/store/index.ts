import Vuex from "vuex";
import Vue from "vue";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state, { StateInterface } from "./state";
import inventory from "./inventory";

import Counter from "./Counter";

export enum MODULES {
  INVENTORY = "inventory",

  COUNTER = "Counter"
}

Vue.use(Vuex);

const store = new Vuex.Store<StateInterface>({
  modules: {
    inventory,

    Counter
  },
  state,
  actions,
  mutations
});

export default store;
