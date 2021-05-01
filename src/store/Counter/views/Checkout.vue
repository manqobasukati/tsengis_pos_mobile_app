<template>
  <div class="tw-flex tw-flex-col tw-h-screen">
    <div class="tw-flex tw-bg-gray-200 tw-p-2  tw-items-center tw-shadow-md ">
      <i class="material-icons tw-text-3xl tw-m-2">arrow_back</i>
      <div class=" tw-text-2xl">
        43.00
      </div>
    </div>

    <div class="tw-h-64 tw-flex tw-justify-center tw-items-center">
        <input class="tw-text-center tw-border-b-4 tw-p-2 focus:tw-outline-none tw-text-xl" placeholder="0.00" type="text" name="" id="">
    </div>
    <div class="tw-bg-gray-200 tw-h-full tw-static">
      <div class="tw-grid tw-grid-rows-5 tw-grid-cols-3 tw-gap-3 tw-p-3 tw-mt-6 tw-text-lg tw-font-bold">
        <div class="tw-shadow tw-p-3">50</div>
        <div class="tw-shadow tw-p-3">100</div>
        <div class="tw-shadow tw-p-2">200</div>
        <div class="tw-shadow tw-p-2">1</div>
        <div class="tw-shadow tw-p-2">2</div>
        <div class="tw-shadow tw-p-2">3</div>
        <div class="tw-shadow tw-p-2">4</div>
        <div class="tw-shadow tw-p-2">5</div>
        <div class="tw-shadow tw-p-2">6</div>
        <div class="tw-shadow tw-p-2">7</div>
        <div class="tw-shadow tw-p-2">8</div>
        <div class="tw-shadow tw-p-2">9</div>
        <div class="tw-shadow tw-p-2">C</div>
        <div class="tw-shadow tw-p-2">0</div>
        <div class="tw-shadow tw-p-2 tw-text-yellow-500 tw-fliter tw-blur-lg">DONE</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Checkout',
});
</script>
