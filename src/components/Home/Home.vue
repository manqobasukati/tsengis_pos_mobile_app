<template>
  <div>App name is {{ app_name }}</div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import { StateInterface } from "@/store/state";

export default Vue.extend({
  name: "Home",
  computed: {
    ...mapState({
      app_name(state) {
        return state.app_name;
      }
    })
  }
});
</script>
