<template>
  <div class="tw-flex tw-flex-col">
    <div class="tw-flex-grow tw-h-64 tw-justify-center">
      <div class="tw-text-3xl tw-text-yellow-500 tw-font-bold">
        Counter items
      </div>
      <div
        class="tw-flex tw-justify-around tw-p-2"
        v-for="(item, key) in counterItems"
        :key="key"
      >
        <div>{{ item.name }}</div>
        <div>{{ item.quantity }}</div>
        <div>{{ item.prize }}</div>
        <i class="material-icons tw-text-yellow-500">
          close
        </i>
      </div>
    </div>
    <div class="tw-flex tw-justify-around  ">
      <button
        @click="AddItem()"
        class="tw-border-2 tw-p-2 tw-border-yellow-500 tw-text-yellow-500"
      >
        Add Item
      </button>
      <button class="tw-bg-yellow-500 tw-p-2 tw-text-white tw-font-semibold">
        Checkout
      </button>
    </div>
    <add-counter-item
      @barcode_value="ReceiveBarcodeValue"
      v-if="AddItemDialogActive"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { MODULES } from '@/store';

import { CounterInterface } from '@/store/Counter/state';

import actions, { COUNTER_ACTIONS } from '@/store/Counter/actions';
import TopBar from '@/components/UIComponents/TopBar.vue';
import AddCounterItem from './AddCounterItem.vue';

import myDb from '@/core/PouchDBHandler';

export default Vue.extend({
  name: 'Counter',
  components: {
    AddCounterItem,
  },
  mounted() {
    console.log(myDb);
  },
  data() {
    return {
      
      AddItemDialogActive: false,
    };
  },
  methods: {
    ReceiveBarcodeValue(data: any) {
      const action = `${MODULES.COUNTER}/${COUNTER_ACTIONS.ADDITEM}`;
      myDb.getStoreItem(data).then((val: any) => {
        console.log('Store Item', val);
        this.$store.dispatch(action, val);
        this.AddItemDialogActive = !this.AddItemDialogActive;
      });
    },
    AddItem() {
      this.AddItemDialogActive = !this.AddItemDialogActive;
    },
  },
  computed: {
    ...mapState(MODULES.COUNTER, {
      counterItems(state: CounterInterface) {
        return state.counterItems;
      },
      totalOfCounterItems(state: CounterInterface) {
        return state.totalOfCounterItems;
      },
      checkoutCounterItems(state: CounterInterface) {
        return state.checkoutCounterItems;
      },
      addItem(state: CounterInterface) {
        return state.addItem;
      },
    }),
  },
});
</script>
