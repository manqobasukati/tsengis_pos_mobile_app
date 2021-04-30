import { Module } from 'vuex';
import { StateInterface } from 'src/store/state';
import state, { InventoryInterface } from './state';
import actions from './actions';
import mutations from './mutations';

const  inventory: Module< InventoryInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default  inventory;








