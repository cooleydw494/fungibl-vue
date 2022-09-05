import { defineComponent } from "@vue/runtime-core";
import ImageKit from "imagekit-javascript"
import store from "../state/index";
import StoreMixin from "./Store.mixin";

const ImageKitMixin = defineComponent({

  mixins: [StoreMixin],

  data(): any {
    return {
      store: { imageKitClient: null, },
      defaultWidth: '200',
      defaultHeight: 'auto',
      defaultParams: {
        'aspectRatio': '1-1',
        // 'height': 'auto', // if not specified is auto by default
        // 'radius': '5', // Usually set this in CSS
      }
    };
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  methods: {

    getImageKitClient(): ImageKit {
      if (this.getState('imageKitClient')) return this.getState('imageKitClient')
      const stagingOrNot = this.isStaging() ? '/staging' : ''
      const imageKitClient = new ImageKit({
        urlEndpoint: `${process.env.VUE_APP_IMAGE_KIT_ENDPOINT}${stagingOrNot}`,
      })
      store.imageKitClient(imageKitClient)
      return this.getState('imageKitClient')
    },

    imageKitUrl(path: string, w: string|null = null, params: {[k:string]: any}|null = null) {
      return this.getImageKitClient().url({
        path: path,
        transformation: [{
          "width": w || this.defaultWidth,
          ...(params || this.defaultParams),
        }]
      })
    },

  },
});

export default ImageKitMixin;
