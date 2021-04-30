<template>
  <div class="tw-flex" :class="backgroundColor">
    <i @click="clickMenu()" :class="[iconFamily, textColor]">menu</i>
    <div :class="[textColor, 'tw-text-lg']">
      {{ title }}
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { AppEmisions } from '@/core/emmisions';
import SideMenu from './SideMenu.vue';
import { mapState } from 'vuex';
import { MODULES } from '@/store';
import { StateInterface } from '@/store/state';

export default Vue.extend({
  name: 'TopBar',
  props: ['backgroundColor', 'textColor', 'title'],
  
  data() {
    return {
      iconFamily: 'material-icons',
      activeSideMenuOption: { name: 'Counter', icon: 'keyboard' },
      showSideMenu: false,
    };
  },
  methods: {
    clickMenu() {
      //this.showSideMenu = !this.showSideMenu;
      this.$emit(AppEmisions.CLICKED_TOPBAR_MENU);
    },

    setActiveOptionSidebar(option: any) {
      console.log('This option', option);
      this.activeSideMenuOption = option;
    },
  },
 
});
</script>
