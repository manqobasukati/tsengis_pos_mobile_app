<template>
  <div>
    <div
      @click="ShowDialog()"
      class="tw-absolute tw-bg-black tw-top-0 tw-left-0  tw-h-screen tw-w-screen tw-flex tw-justify-center tw-items-center tw-flex-col"
    ></div>

    <div
      class="tw-absolute tw-top-0  tw-left-0 tw-mt-32 tw-ml-10 tw-flex tw-flex-col tw-items-center"
    >
      <video
        class="tw-bg-white "
        id="video"
        width="300"
        height="200"
        style="border: 1px solid gray"
      ></video>
      <div v-if="barcodeRead" class="tw-text-lg tw-text-white">
        {{ barcodeRead }}
      </div>
      <div v-else class="tw-text-lg tw-text-red-900">
        Not Read
      </div>
      <button
        @click="ReadBarcode()"
        class="tw-bg-black tw-p-2 tw-w-3/4 tw-mt-2 tw-border-none tw-text-white"
      >
        Read
      </button>
      <button
        @click="ResetBarcodeReader()"
        class="tw-bg-black tw-p-2 tw-w-3/4 tw-mt-2 tw-border-none tw-text-white"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { BrowserBarcodeReader, NotFoundException } from "@zxing/library";
import { AppEmisions } from "@/core/emmisions";

export default Vue.extend({
  name: "AddCounterItem",
  props: ["DialogActive"],
  data() {
    return {
      reader: null as null | any,
      deviceId: "",
      device: null as null | any,
      barcodeRead: null as null | string
    };
  },
  methods: {
    ShowDialog() {
      this.$emit(AppEmisions.SHOW_DIALOG);
    },
    ResetBarcodeReader() {
      this.reader.reset();
      this.barcodeRead = "";
    },
    ReadBarcode() {
      this.reader
        .decodeOnceFromVideoDevice(this.deviceId, "video")
        .then((result: any) => {
          this.barcodeRead = result.text;
          this.$emit(AppEmisions.BARCODE_VALUE, this.barcodeRead);
        })
        .catch((err: any) => console.error(err));
    }
  },
  mounted() {
    this.reader = new BrowserBarcodeReader(50);

    this.reader
      .listVideoInputDevices()
      .then((videoInputDevices: any) => {
        if (videoInputDevices.length > 1) {
          this.deviceId = videoInputDevices[1].deviceId;
        } else {
          this.deviceId = videoInputDevices[0].deviceId;
        }

        this.device = videoInputDevices;
      })
      .catch((err: any) => {
        this.device = err;
      });

    this.ReadBarcode();
  }
});
</script>
