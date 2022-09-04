import { defineComponent } from "@vue/runtime-core";
import ImageKit from "imagekit-javascript"
import store from "../state/index";
import StoreMixin from "./Store.mixin";

const AuthMixin = defineComponent({

  mixins: [StoreMixin],

  data(): any {
    return {
      store: { imageKitClient: null, },
      defaultWidth: '100%',
      defaultHeight: 'auto',
      defaultParams: {
        'aspectRatio': '1-1',
        'radius': '.25rem'
      }
    };
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  methods: {

    getImageKitClient() {
      if (this.store.imageKitClient) return this.store.imageKitClient
      const stagingOrNot = this.isStaging() ? '/staging' : ''
      store.imagekitClient(new ImageKit({
        urlEndpoint: `${process.env.IMAGE_KIT_ENDPOINT}${stagingOrNot}`,
      }))
      return this.store.imageKitClient
    },

    imageKitUrl(path: string, w: string|null = null, h: string|null = null,
                params: {[k:string]: any}|null = null) {

      return this.getImageKitClient().url({
        path: "/default-image.jpg",
        transformation: [{
          "width": w || this.defaultWidth,
          "height": h || this.defaultHeight,
          ...(params || this.defaultParams),
        }]
      })
    },

  },
});

export default AuthMixin;
