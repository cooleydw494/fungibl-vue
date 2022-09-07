import {loadStdlib} from "@reach-sh/stdlib";
import store from "./state";
import {ApplicationState} from "@jackcom/raphsducks/lib/types";
const mintNfts = async () => {
    const baseUrl = 'https://nftstorage.link/ipfs/bafybeih6gl7yqbios3thgyg3ps5e53dv7u477d4oue2uwb5tdshyugogza/'
    const numStrings = Array(25).fill(7).map((value, index) => {
        let numString = `${index+value}`
        if (numString.length === 1) numString = `0${numString}`
        return numString
    })
    const reach = await loadStdlib()
    const state = store.getState()
    console.log(numStrings)
    for (const numString of numStrings) {
        await mintNft(numString, reach, state, baseUrl)
    }
}
const mintNft = async (numString: string, reach: any, state: ApplicationState, baseUrl: string) => {
    console.log(`${baseUrl}${numString}.jpeg`)
    await reach.launchToken(
        state['account'],
        `FuNFT #0${(parseInt(numString) + 98).toString()}`,
        `0${(parseInt(numString) + 98).toString()}`,
        {
            'url': `${baseUrl}${numString}.jpeg`,
            'decimals': 0,
            'supply': 1,
            'clawback': 'VNDWDGQYUBUDSS6R24JPQOUYHBUOKXD6JOFUSAWEHWQEZDS2BUFE5OASZY', // Fungibl LLC Wallet
            'reserve': 'VNDWDGQYUBUDSS6R24JPQOUYHBUOKXD6JOFUSAWEHWQEZDS2BUFE5OASZY', // Fungibl LLC Wallet
        }
    )
}
export {mintNfts}
