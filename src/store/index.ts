import Vuex from 'vuex';
import Vue from 'vue';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state, { StateInterface } from './state';
import Counter from './Counter';

export enum MODULES {
  COUNTER = 'Counter',
}

Vue.use(Vuex);

const store = new Vuex.Store<StateInterface>({
  modules: {
    Counter,
  },
  state,
  actions,
  mutations,
});

export default store;
