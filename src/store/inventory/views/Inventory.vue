<template>
  <div class="tw-flex tw-flex-col"></div>
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
