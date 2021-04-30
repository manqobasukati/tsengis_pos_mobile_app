import { MutationTree } from 'vuex';

import { InventoryInterface} from './state'

export enum INVENTORY_MUTATIONS {
     STORE_NAME  = "store_name",
     SEARCH_TEXT  = "search_text",
      
}

const mutations: MutationTree< InventoryInterface > = {
  [INVENTORY_MUTATIONS.STORE_NAME](state:InventoryInterface, payload){
      state.store_name = payload;
  },
  [INVENTORY_MUTATIONS.SEARCH_TEXT](state:InventoryInterface, payload){
      state.search_text = payload;
  },

}

export default mutations;