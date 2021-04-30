import { ActionTree } from 'vuex';

import { StateInterface } from 'src/store/state'
import { COUNTER_MUTATIONS } from './mutations';

import { CounterInterface} from './state'

export enum COUNTER_ACTIONS {
  COUNTERITEMS  = "counterItems",
   TOTALOFCOUNTERITEMS  = "totalOfCounterItems",
  CHECKOUTCOUNTERITEMS  = "checkoutCounterItems",
   ADDITEM  = "addItem",
  
}

const actions: ActionTree< CounterInterface, StateInterface > = {
    [COUNTER_ACTIONS.COUNTERITEMS](context, payload){
        context.commit(COUNTER_MUTATIONS.COUNTERITEMS, payload)
    },
      [COUNTER_ACTIONS.TOTALOFCOUNTERITEMS](context, payload){
        context.commit(COUNTER_MUTATIONS.TOTALOFCOUNTERITEMS, payload)
    },
      [COUNTER_ACTIONS.CHECKOUTCOUNTERITEMS](context, payload){
        context.commit(COUNTER_MUTATIONS.CHECKOUTCOUNTERITEMS, payload)
    },
      [COUNTER_ACTIONS.ADDITEM](context, payload){
        context.commit(COUNTER_MUTATIONS.ADDITEM, payload)
    },
  
    
}

export default actions;