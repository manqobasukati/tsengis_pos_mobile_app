import { CounterItem } from '@/types/CounterItem.model';
import { MutationTree } from 'vuex';

import { CounterInterface } from './state';

export enum COUNTER_MUTATIONS {
  COUNTERITEMS = 'counterItems',
  TOTALOFCOUNTERITEMS = 'totalOfCounterItems',
  CHECKOUTCOUNTERITEMS = 'checkoutCounterItems',
  ADDITEM = 'addItem',
  REMOVE_ITEM = 'remove_items',
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
    state.totalOfCounterItems = state.totalOfCounterItems + payload.prize;
  },
  [COUNTER_MUTATIONS.REMOVE_ITEM](
    state: CounterInterface,
    payload: CounterItem
  ) {
    const itemIndex = (state.counterItems as CounterItem[]).findIndex((val) => {
      return val._id === payload._id;
    });

    state.counterItems.splice(itemIndex, 1);

    state.totalOfCounterItems = state.totalOfCounterItems - payload.prize;
  },
};

export default mutations;
