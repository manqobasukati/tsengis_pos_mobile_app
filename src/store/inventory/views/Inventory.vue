<template>
  <div class="tw-flex  tw-flex-col tw-items-center tw-p-8">
    <input
      class="tw-w-full tw-border-2 tw-border-yellow-500 tw-p-4  focus:tw-outline-none "
      placeholder="Search items"
      type="text"
    />
    <div class="tw-text-lg tw-text-left tw-font-hairline tw-py-2 tw-w-full">
      Categories
    </div>

    <div
      class="tw-shadow-md tw-w-full tw-flex tw-p-2 tw-justify-between tw-text-lg"
    >
      <div>Body products (32)</div>
      <i class="material-icons">
        expand_more
      </i>
    </div>

    <div class="tw-flex tw-flex-row tw-mt-2  tw-w-full tw-space-x-1 ">
      <button @click="navigateTo('/inventory/add-item')" class="tw-border-2 tw-border-yellow-500 tw-w-1/2 tw-p-3 tw-text-yellow-500 focus:tw-outline-none">Add item</button
      ><button class="tw-bg-yellow-500 tw-w-1/2 tw-text-white focus:tw-outline-none ">add catergory</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { MODULES } from '@/store';

import { InventoryInterface } from '@/store/inventory/state';

import actions from '@/store/inventory/actions';
import TopBar from '@/components/UIComponents/TopBar.vue';

export default Vue.extend({
  name: 'Inventory',
  methods:{
    navigateTo(path:string){
      this.$router.push({path:path})
    }
  }, 
  computed: {
    ...mapState(MODULES.INVENTORY, {
      store_name(state: InventoryInterface) {
        return state.store_name;
      },
      search_text(state: InventoryInterface) {
        return state.search_text;
      },
    }),
  },
});
</script>
