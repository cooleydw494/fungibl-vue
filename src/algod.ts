import {Algodv2} from "algosdk";

export async function getAlgodClient(): Promise<Algodv2> {
    const algosdk = require('algosdk')
    const baseServer = 'https://testnet-algorand.api.purestake.io/ps2'
    const port = ''
    const token = {
        'X-API-Key': process.env.VUE_APP_ALGOD_API_KEY
    }

    return new algosdk.Algodv2(token, baseServer, port)

    // Example usage from PureStake docs
    // (async () => {
    //
    //     let params = await algodClient.getTransactionParams().do()
    //
    //     let amount = Math.floor(Math.random() * 1000)
    //     var mnemonic = "code thrive mouse code badge example pride stereo sell viable adjust planet text close erupt embrace nature upon february weekend humble surprise shrug absorb faint"
    //     var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic)
    //
    //     let txn = {
    //         "from": recoveredAccount.addr,
    //         "to": "UUOB7ZC2IEE4A7JO4WY4TXKXWDFNATM43TL73IZRAFIFFOE6ORPKC7Q62E",
    //         "fee": 1000,
    //         "amount": amount,
    //         "firstRound": params.firstRound,
    //         "lastRound": params.lastRound,
    //         "genesisID": params.genesisID,
    //         "genesisHash": params.genesisHash,
    //         "note": new Uint8Array(0),
    //     }
    //
    //     let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk)
    //     let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do()
    //
    //     console.log("Transaction : " + sendTx.txId)
    // })().catch(e => {
    //     console.log(e)
    // })
}

// This is apparently not a thing, the openAI chatbot tried to make it work for me but I get CORS error
// export async function getAssetsByIDs(client: Algodv2, assetIds: Array<number|string>) {
//     const response = await client.c.get(
//         '/v2/assets',
//         {
//             'ids': assetIds.join(',')
//         }, {
//             'X-API-Key': process.env.VUE_APP_ALGOD_API_KEY || ''
//         }
//     )
//     return response.body?.assets
// }
