import { ActionTree } from 'vuex';
import { STATE_MUTATIONS } from './mutations';
import { StateInterface } from './state';

export enum STATE_ACTIONS {
  SET_ACTIVE_MODULE = 'set_active_module',
}

const actions: ActionTree<StateInterface, StateInterface> = {
  [STATE_ACTIONS.SET_ACTIVE_MODULE](context, payload) {
    context.commit(STATE_MUTATIONS.SET_ACTIVE_MODULE, payload);
  },
};

export default actions;
