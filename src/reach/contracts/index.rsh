'reach 0.1'

export const main = Reach.App(() => {
  const Submitter = Participant('Submitter', {
    getNftAssetId: Fun([], Token),
    initializing: Fun([], Null),
    signingTransfer: Fun([], Null),
    submitSuccess: Fun([Token], Null)
  })
  const Puller = Participant('Puller', {
    getPullCost: Fun([], UInt),
    getFungiblAppWallet: Fun([], Address),
    getFunToken: Fun([], Token),
    pullSuccess: Fun([Token], Null),
    sendingTokenToContract: Fun([], Null),
    transferringTokenToFungiblApp: Fun([], Null),
    transferringNftToPuller: Fun([], Null),
  })

  init()

  Submitter.only(() => {
    const nftAssetId = declassify(interact.getNftAssetId())
  })
  Submitter.publish(nftAssetId)
  Submitter.interact.initializing()
  commit()
  Submitter.interact.signingTransfer()

  Submitter.pay([[1, nftAssetId]])
  commit()
  Submitter.interact.submitSuccess(nftAssetId)


  Puller.only(() => {
    const pullCost = declassify(interact.getPullCost())
    const fungiblAppWallet = declassify(interact.getFungiblAppWallet())
    const funToken = declassify(interact.getFunToken())
    assume(funToken != nftAssetId)
  })

  Puller.publish(pullCost, fungiblAppWallet, funToken)

  commit()

  Puller.interact.sendingTokenToContract()
  Puller.pay([[pullCost, funToken]])
  Puller.interact.transferringTokenToFungiblApp()
  transfer(pullCost, funToken).to(fungiblAppWallet)
  Puller.interact.transferringNftToPuller()
  transfer(1, nftAssetId).to(Puller)
  commit()

  Puller.interact.pullSuccess(nftAssetId)

  exit()
})
