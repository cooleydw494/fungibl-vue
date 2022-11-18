import {
  createConnectorAPI,
  createReachAPI,
  loadReachWithOpts,
  connectUser,
  disconnectUser,
  ConnectedUserData,
  reconnectUser,
  checkSessionExists,
} from "@jackcom/reachduck"
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
  ALGO_WalletConnect as WalletConnect,
  ALGO_MakePeraConnect as PeraWallet,
} from "@reach-sh/stdlib"
import store, { addNotification } from "../state"

/** Global default reach object */
export const useReach = createReachAPI

/** Use `MyAlgoConnect` for user transactions */
export function useMyAlgo() {
  return setWalletFallback({ MyAlgoConnect })
}

/** Use `WalletConnect` for user transactions */
export function useWalletConnect() {
  return setWalletFallback({ WalletConnect })
}

/** Use `Pera` for user transactions */
export function usePera() {
  return setWalletFallback({ WalletConnect: PeraWallet })
}

/** Connect user Wallet (MyAlgoWallet) */
async function setWalletFallback(walletFallback: any) {
  const providerEnv = createConnectorAPI("ALGO", "TestNet").getProviderEnv()
  // Second argument are default opts that you can override.
  // @jackcom/reachduck will use these values if you don't specify any.
  loadReachWithOpts(loadStdlib, {
    chain: "ALGO",
    network: "TestNet",
    providerEnv,
    walletFallback,
  })
}

/** Set wallet options for a string representation of a provider */
async function configureWalletProvider(walletType: string) {
  if (!["WalletConnect", "PeraConnect", "MyAlgo"].includes(walletType)) return;

  switch (walletType) {
    case "PeraConnect": {
      await usePera()
      break;
    }
    case "WalletConnect": {
      await useWalletConnect()
      break;
    }
    default:
      await useMyAlgo()
      break;
  }
}

/** Connect user Wallet  */
export async function connectWallet(walletType = 'MyAlgo') {
  try {
    store.loading(true)
    addNotification("🔑 Connecting Account ... ")
    await configureWalletProvider(walletType)
    return onConnected(await connectUser(), walletType)
  } catch (e: any) {
    store.error(e.message || e)
    return null
  }
}

/** Reconnect user session */
export async function reconnectWallet(addr: string) {
  try {
    let walletType = null
    store.loading(true)
    addNotification("🔑 Resuming session ... ")
    const { addr = undefined, isWCSession } = checkSessionExists()
    if (isWCSession) {
      debugger
      if (isWCSession) {
        walletType = 'WalletConnect'
        await useWalletConnect()
      }
      else {
        walletType = 'PeraConnect'
        await usePera()
      }
      // PeraConnect
    } else {
      walletType = 'MyAlgo'
      await useMyAlgo()
    }
    return onConnected(await reconnectUser(addr), walletType)
  } catch (e: any) {
    store.error(e.message || e)
    return null
  }
}

export function disconnectWallet() {
  disconnectUser()
  store.reset()
  window.location.reload()
}

/** @internal Connect user Wallet (MyAlgoWallet) */
function onConnected(data: ConnectedUserData, walletType: string) {
  try {
    const { account, address, balance } = data
    // Update global state
    store.multiple({
      walletType,
      address,
      account,
      balance,
      connected: true,
      loading: false,
    })
    addNotification("✅ Connected ")
    return account
  } catch (e: any) {
    store.error(e.message || e)
    return null
  }
}
