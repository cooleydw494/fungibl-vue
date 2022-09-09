'reach 0.1'

export const main = Reach.App(() => {
  const Submitter = Participant('Submitter', {
    getNftAssetId: Fun([], Token),
    initializing: Fun([], Null),
    signingTransfer: Fun([], Null),
    submitSuccess: Fun([Token], Null)
  })
  const Puller = Participant('Puller', {
    getVerification: Fun([], UInt),
    pullSuccess: Fun([Token], Null)
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
    const verification = declassify(interact.getVerification())
  })

  Puller.publish(verification)

  transfer(1, nftAssetId).to(Puller)
  commit()

  Puller.interact.pullSuccess(nftAssetId)

  exit()
})
