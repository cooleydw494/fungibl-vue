import createState from "@jackcom/raphsducks"
import { NETWORKS } from "@jackcom/reachduck"
import {Algodv2} from "algosdk"
import ImageKit from "imagekit-javascript"
import {defaultPoolMetas} from "../defaults"

/** Your global application state. Add any properties you need here */
const store = createState({
  /** When true, user has connected a wallet */
  connected: false,

  connecting: false,

  disconnecting: false,

  /** Message objects (can be sorted by timestamp) */
  notifications: [] as Alert[],

  /** Wallet address (for UI) */
  address: "",

  /** Reach `networkAccount` instance */
  account: null as any | null,

  walletType: null as string | null,

  /** Reach `networkAccount` balance */
  balance: "0",

  // init to true helps with smoother load, but check MUST resolve later
  funOptedIn: true,

  funOptingIn: false,

  funBalance: "0",

  /** All assets of connected wallet */
  assets: [],

  /** TODO: Get wallet NFTs */
  nfts: [],

  needsPostAuthNftSync: false,

  nftImagesLoading: {},

  selectedNft: null as any | null,

  selectedNftId: null as any | null,

  selectedNftEstimates: {
    estAlgo: 0,
  },

  poolMetas: defaultPoolMetas,

  /** Current configured network */
  currentNetwork: NETWORKS.ALGO.abbr,

  /** Error messages */
  error: "",

  /** Global Loading state */
  loading: false,

  /** DO NOT ACCESS DIRECTLY, CALL StoreMixin.getAlgodClient */
  algodClient: <Algodv2|null> null,

  /** DO NOT ACCESS DIRECTLY, CALL StoreMixin.getImageKit */
  imageKitClient: <ImageKit|null> null,

  // showAuthModal: false,

  authConfirmed: false,

  showPreviewModal: <boolean|string> false,

  showMobileMenu: <boolean> false,

  loadedMarketingBg: <boolean> false,

  innerWidth: <number> window.innerWidth,

  innerHeight: <number> window.innerHeight,

  isMobile: <boolean> isMobile(),
})

export default store

function isMobile() {
  return window.innerWidth < 768
}

export type Alert = { msg: string; time: number }

export function addNotification(msg: string, additionalUpdates = {}) {
  const note = makeNotification(msg)
  const { notifications: old } = store.getState()
  const notifications = [...old, note]
  store.multiple({ notifications, ...additionalUpdates })
}

export function resetNotifications(msg?: string) {
  const updates = []
  if (msg) updates.push(makeNotification(msg))
  store.notifications(updates)
}

export function removeNotification(msg: Alert, additionalUpdates = {}) {
  const { notifications } = store.getState()
  const i = notifications.findIndex((n) => n.time === msg.time)
  if (i === -1) return

  const updates = [...notifications]
  updates.splice(i, 1)
  store.multiple({ notifications: updates, ...additionalUpdates })
}

function makeNotification(msg: string) {
  return { msg, time: new Date().getTime() }
}

export function clearNotification(m?: string) {
  if (!m) return
  const { notifications } = store.getState()
  const note = notifications.find((n) => n.msg === m)
  if (note) removeNotification(note)
}

export function nftImageLoading(assetId: number, isLoading = true) {
  const { nftImagesLoading } = store.getState()
  const newLoading: {[k:number]: boolean} = {...nftImagesLoading}
  newLoading[assetId] = isLoading
  store.nftImagesLoading(newLoading)
}
