<template>
  <div class="tw-flex tw-flex-col">
    <top-bar
      class="tw-h-10"
      @click_topbar_menu="showSideMenu = !showSideMenu"
      :backgroundColor="'tw-bg-yellow-500'"
      :textColor="'tw-text-white'"
      :title="this.active_module.name"
    />
    <side-menu
      :showSideMenu="showSideMenu"
      @close_side_menu="showSideMenu = !showSideMenu"
      :activeOption="activeSideMenuOption"
      @set_active_item_sidebar="setActiveModule"
      :options="modules"
    />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { MODULES } from '@/store';
import { STATE_ACTIONS } from '@/store/actions';
import { ModuleDefinition } from '@/types/module.model';
import Vue from 'vue';
import { component } from 'vue/types/umd';
import SideMenu from '../UIComponents/SideMenu.vue';
import TopBar from '../UIComponents/TopBar.vue';
export default Vue.extend({
  name: 'Layout',
  components: {
    TopBar,
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
    setActiveModule(active_module: ModuleDefinition) {
      const action = `${STATE_ACTIONS.SET_ACTIVE_MODULE}`;
      this.activeSideMenuOption = active_module;

      this.$store.dispatch(action, active_module).then(() => {
        this.$router.push({ path: active_module.link });
        this.showSideMenu = !this.showSideMenu;
      });
    },
  },
  computed: {
    modules() {
      return this.$store.state.modules;
    },
    active_module() {
      
      return this.$store.state.active_module;
    },
  },
});
</script>
