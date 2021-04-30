<template>
  <div class="tw-flex  tw-flex-col ">
    <div
      class="tw-flex tw-bg-yellow-500 tw-p-4 tw-text-white tw-items-center tw-shadow-md"
    >
      <i
        class="material-icons tw-text-3xl tw-m-2"
        @click="navigateTo('/inventory')"
        >arrow_back</i
      >
      <div class="tw-text-white tw-text-2xl">
        Add item
      </div>
    </div>
    <div class="tw-flex tw-flex-col tw-p-4 tw-space-y-1">
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Item name"
        type="text"
      />
      <div class="tw-relative tw-bg-red-900 tw-w-full ">
        <input
          class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
          placeholder="Item number"
          type="text"
        />
        <i class="tw-absolute tw-p-4 tw-inset-y-0 tw-right-0 material-icons "
          >photo_camera</i
        >
      </div>

      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Item category"
        type="text"
      />
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="item quality"
        type="text"
      />
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Purchase prize"
        type="text"
      />
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Sell prize"
        type="text"
      />
      <button
        class="tw-w-full tw-bg-yellow-400 tw-p-2 tw-text-2xl tw-text-white"
      >
        submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AddInventoryItem',
  methods: {
    navigateTo(path: string) {
      this.$router.push({ path: path });
    },
  },
});
</script>
