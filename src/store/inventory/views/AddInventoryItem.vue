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
        v-model="product_details.name"
        type="text"
      />
      <div class="tw-relative tw-bg-red-900 tw-w-full ">
        <input
          class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
          placeholder="Item number"
          v-model="product_details._id"
          type="text"
        />
        <i
          @click="showDialog()"
          class="tw-absolute tw-p-4 tw-inset-y-0 tw-right-0 material-icons "
          >photo_camera</i
        >
      </div>

      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Item category"
        v-model="product_details.category"
        type="text"
      />
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="item quantity"
        v-model="product_details.quantity"
        type="text"
      />
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Purchase prize"
        type="text"
        v-model="product_details.purchase_prize"
      />
      <input
        class="tw-w-full tw-border-2 tw-border-yellow-400 tw-p-4  focus:tw-outline-none "
        placeholder="Resell prize"
        v-model="product_details.resell_prize"
        type="text"
      />
      <button
        @click="addItem()"
        class="tw-w-full tw-bg-yellow-400 tw-p-2 tw-text-2xl tw-text-white"
      >
        submit
      </button>
    </div>

    <add-counter-item
      @show_dialog="showDialog"
      @barcode_value="ReceiveBarcodeValue"
      v-if="AddItemDialogActive"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import myDb from "@/core/PouchDBHandler";
import AddCounterItem from "@/store/Counter/views/AddCounterItem.vue";
import { StoreItem } from "@/core/PouchDBHandler/StoreItem.model";
export default Vue.extend({
  name: "AddInventoryItem",
  components: {
    AddCounterItem
  },
  data() {
    return {
      AddItemDialogActive: false,
      product_details: {
        _id: "",
        name: "",
        date_added: new Date(),
        purchase_prize: 0,
        resell_prize: 0,
        quantity: 0,
        category: ""
      }
    };
  },
  methods: {
    addItem() {
      const inventory_item: StoreItem = {
        ...this.product_details,
        date_added: new Date().toString()
      };
      myDb
        .addStoreItem(inventory_item)
        .then(val => {
          console.log("item added");
        })
        .catch(e => {
          console.log("Error here", e);
        });
    },
    ReceiveBarcodeValue(data: any) {
      this.product_details._id = data;
      this.showDialog();
    },
    showDialog() {
      this.AddItemDialogActive = !this.AddItemDialogActive;
    },
    navigateTo(path: string) {
      this.$router.push({ path: path });
    }
  }
});
</script>
