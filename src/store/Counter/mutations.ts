import { MutationTree } from 'vuex';

import { CounterInterface } from './state';

export enum COUNTER_MUTATIONS {
  COUNTERITEMS = 'counterItems',
  TOTALOFCOUNTERITEMS = 'totalOfCounterItems',
  CHECKOUTCOUNTERITEMS = 'checkoutCounterItems',
  ADDITEM = 'addItem',
}

const mutations: MutationTree<CounterInterface> = {
  [COUNTER_MUTATIONS.COUNTERITEMS](state: CounterInterface, payload) {
    state.counterItems = payload;
  },
  [COUNTER_MUTATIONS.TOTALOFCOUNTERITEMS](state: CounterInterface, payload) {
    state.totalOfCounterItems = payload;
  },
  [COUNTER_MUTATIONS.CHECKOUTCOUNTERITEMS](state: CounterInterface, payload) {
    state.checkoutCounterItems = payload;
  },
  [COUNTER_MUTATIONS.ADDITEM](state: CounterInterface, payload) {
    state.counterItems.push(payload);
  },
};

export default mutations;
