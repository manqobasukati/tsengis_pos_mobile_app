<template>
  <div
    class="absolute inset-x-0 bottom-0 h-8  inline-flex space-x-16 items-center justify-center w-full"
  >
    <div v-for="(menuItem, key) in MenuItems" :key="key">
      <div class="w-1/6">
        <i class="material-icons py-3  text-expenses-icon" @click="navigate_to(menuItem.link)">{{
          menuItem.icon
        }}</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BottomNavigation',
  props: ['MenuItems'],
  methods:{
      navigate_to(link:string){
          this.$router.push({path:link})
      }
  }
});
</script>
