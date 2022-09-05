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
        // 'height': 'auto', // if not specified is auto by default
        'aspectRatio': '1-1',
        'radius': '5',
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
      store.imagekitClient(new ImageKit({
        urlEndpoint: `${process.env.VUE_APP_IMAGE_KIT_ENDPOINT}${stagingOrNot}`,
      }))
      return this.getState('imageKitClient')
    },

    imageKitUrl(path: string, w: string|null = null, params: {[k:string]: any}|null = null) {
      const stagingOrNot = this.isStaging() ? '/staging' : ''
      // return `https://fungible-files.s3.amazonaws.com/cache/images/local-dev/${path}`
      const imageKitClient = new ImageKit({
        urlEndpoint: `${process.env.VUE_APP_IMAGE_KIT_ENDPOINT}${stagingOrNot}`,
      })

      return imageKitClient.url({
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
