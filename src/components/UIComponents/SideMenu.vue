<template>
  <div v-if="showSideMenu" class="tw-absolute  tw-flex tw-h-screen tw-w-screen">
    <div class="tw-w-2/3 tw-bg-yellow-500 tw-h-full tw-flex-col">
      <div class="tw-pt-8">
        <i class="material-icons tw-text-6xl tw-text-white">domain</i>
        <div class="tw-text-white ">Store name here</div>
      </div>
      <div class="tw-pt-8">
        <div
          v-for="(option, key) in options"
          :key="key"
          @click="clickItem(option)"
          :class="[
            'tw-justify-between',
            { 'tw-bg-yellow-300': option.name === activeOption.name },
            'tw-p-2',
            'tw-flex',
          ]"
        >
          <div>{{ option.name }}</div>
          <i class="material-icons">{{ option.icon }}</i>
        </div>
      </div>
    </div>
    <div @click="closeSideMenu" class="tw-w-1/3 tw-bg-black tw-h-full tw-opacity-50"></div>
  </div>
</template>

<script lang="ts">
import { AppEmisions } from '@/core/emmisions';
import Vue from 'vue';
export default Vue.extend({
  name: 'SideMenu',
  props: ['options', 'activeOption', 'showSideMenu'],
  methods: {
    clickItem(option: any) {
      this.$emit(AppEmisions.SET_ACTIVE_ITEM_SIDEBAR, option);
    },
    closeSideMenu() {
      this.$emit(AppEmisions.CLOSE_SIDE_MENU, false);
    },
  },
});
</script>
