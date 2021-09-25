<template>
  <div class="tw-flex tw-flex-col  tw-p-2  tw-items-center">
    <div
      class="tw-flex-grow tw-h-full tw-justify-between tw-w-full md:tw-w-1/2 "
    >
      <div class="tw-text-3xl tw-text-black tw-font-bold">
        Counter items
      </div>

      <div
        v-for="(item, key) in counterItems"
        :key="key"
        class="tw-flex  tw-shadow-md tw-my-2 "
      >
        <div class="tw-flex tw-flex-col tw-w-5/6 tw-p-2">
          <div class="tw-flex tw-text-lg  tw-w-full tw-justify-between">
            <div>{{ item.name }}</div>
            <div>{{ item.prize }}</div>
          </div>
          <div class="tw-flex tw-w-full tw-text-xs tw-justify-between">
            <div class="tw-bg-gray-200 tw-p-1 tw-font-semibold">
              {{ item.category || 'consumables' }}
            </div>
            <div class="tw-bg-blue-200 tw-p-1 tw-font-semibold tw-px-2">
              {{ item.quantity }}
            </div>
          </div>
        </div>
        <div
          class="tw-bg-red-100 tw-w-1/6  tw-flex tw-justify-center tw-items-center"
        >
          <i
            @click="removeCounterItem(item)"
            class="material-icons tw-text-red-500"
            >delete_outline</i
          >
        </div>
      </div>
    </div>
    <div class="tw-text-gray-500 tw-text-5xl tw-font-bold">
      E{{ totalOfCounterItems }}
    </div>
    <div
      class="tw-flex tw-flex-row tw-mt-2 tw-w-full md:tw-w-1/2  tw-space-x-1 "
    >
      <button
        @click="AddItem()"
        class="tw-border-2 tw-border-black tw-w-1/2 tw-p-3  focus:tw-outline-none"
      >
        Add item</button
      ><button
        @click="navigateTo('/counter/checkout')"
        class="tw-bg-black tw-w-1/2 tw-text-white focus:tw-outline-none "
      >
        Checkout
      </button>
    </div>
    <add-counter-item
      @show_dialog="AddItem"
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
import { CounterItem } from '@/types/CounterItem.model';

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
        this.$store.dispatch(action, val);
        this.AddItemDialogActive = !this.AddItemDialogActive;
      });
    },
    AddItem() {
      this.AddItemDialogActive = !this.AddItemDialogActive;
    },
    navigateTo(path: string) {
      this.$router.push({ path: path });
    },
    removeCounterItem(counterItem: CounterItem) {
      const action = `${MODULES.COUNTER}/${COUNTER_ACTIONS.REMOVE_ITEM}`;

      this.$store.dispatch(action, counterItem);
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
