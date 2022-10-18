import { defineComponent } from "@vue/runtime-core"
import ImageKit from "imagekit-javascript"
import store from "../state/index";
import StoreMixin from "./Store.mixin";

const ImageKitMixin = defineComponent({

  mixins: [StoreMixin],

  data(): any {
    return {
      defaultWidth: '200',
      defaultHeight: 'auto',
      defaultParams: {
        'aspectRatio': '1-1',
        // 'height': 'auto', // if not specified is auto by default
        // 'radius': '5', // Usually set this in CSS
      }
    };
  },

  methods: {

    getImageKitClient(overrideUrl: string|null = null): ImageKit {
      if (this.getState('imageKitClient') && !overrideUrl) return this.getState('imageKitClient')
      // If local, testnet is set in the env var, if built for prod, need to sniff in URL
      const stagingOrNot = this.isStaging() ? '/testnet' : ''
      const imageKitClient = new ImageKit({
        urlEndpoint: overrideUrl ? overrideUrl : `${process.env.VUE_APP_IMAGE_KIT_ENDPOINT}${stagingOrNot}`,
      })
      store.imageKitClient(imageKitClient)
      return this.getState('imageKitClient')
    },

    imageKitUrl(path: string, w: string|null = null, overrideUrl: string|null = null, params: {[k:string]: any}|null = null) {
      let client = null;
      if (overrideUrl) {
        client = this.getImageKitClient(overrideUrl)
      } else {
        client = this.getImageKitClient()
      }
      return client.url({
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
