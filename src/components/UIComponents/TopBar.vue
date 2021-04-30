<template>
  <div class="tw-flex" :class="backgroundColor">
    <i @click="clickMenu()" :class="[iconFamily, textColor]">menu</i>
    <div  :class="[textColor, 'tw-text-lg']">
      {{ title }}
    </div>
    <side-menu
      :showSideMenu="showSideMenu"
      @close_side_menu="showSideMenu = !showSideMenu"
      :activeOption="activeSideMenuOption"
      @set_active_item_sidebar="setActiveOptionSidebar"
      :options="[
        { name: 'Counter', icon: 'keyboard' },
        { name: 'Inventory', icon: 'keyboard' },
      ]"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { AppEmisions } from '@/core/emmisions';
import SideMenu from './SideMenu.vue';

export default Vue.extend({
  components: {
    SideMenu,
  },
  data() {
    return {
      iconFamily: 'material-icons',
      activeSideMenuOption: { name: 'Counter', icon: 'keyboard' },
      showSideMenu: false,
    };
  },
  methods: {
    clickMenu() {
      this.showSideMenu = !this.showSideMenu;
      this.$emit(AppEmisions.CLICKED_TOBAR_MENU);
    },

    setActiveOptionSidebar(option: any) {
      console.log('This option', option);
      this.activeSideMenuOption = option;
    },
  },
  name: 'TopBar',
  props: ['backgroundColor', 'textColor', 'title'],
});
</script>
