
import { MutationTree } from "vuex";
import { StateInterface } from "./state";

export enum STATE_MUTATIONS {
    SET_ACTIVE_MODULE = 'set_active_module'
}

const mutations: MutationTree<StateInterface> = {
    [STATE_MUTATIONS.SET_ACTIVE_MODULE](state,payload){
        state.active_module = payload;
    }
};

export default mutations;
