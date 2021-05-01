<template>
  <div
    :class="[backgroundColor, 'tw-flex tw-items-center tw-shadow-md tw-p-4 ']"
  >
    <i
      @click="clickMenu()"
      :class="[iconFamily, textColor, 'tw-text-3xl', 'tw-m-2']"
      >menu</i
    >
    <div :class="[textColor, 'tw-text-2xl']">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { AppEmisions } from "@/core/emmisions";
import SideMenu from "./SideMenu.vue";
import { mapState } from "vuex";
import { MODULES } from "@/store";
import { StateInterface } from "@/store/state";

export default Vue.extend({
  name: "TopBar",
  props: ["backgroundColor", "textColor", "title"],

  data() {
    return {
      iconFamily: "material-icons",
      activeSideMenuOption: { name: "Counter", icon: "keyboard" },
      showSideMenu: false
    };
  },
  methods: {
    clickMenu() {
      //this.showSideMenu = !this.showSideMenu;
      this.$emit(AppEmisions.CLICKED_TOPBAR_MENU);
    },

    setActiveOptionSidebar(option: any) {
      console.log("This option", option);
      this.activeSideMenuOption = option;
    }
  }
});
</script>
