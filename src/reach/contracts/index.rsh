'reach 0.1'

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    fungiblAddress: Address,
    submitterAddress: Address,
    // creatorAddress: Address,
    funToken: Token,
    nftAssetId: Token,
    // creatorDonation: UInt,
  })
  const Submitter = Participant('Submitter', {
    signingTransfer: Fun([], Null),
    submitSuccess: Fun([Token], Null)
  })
  const Puller = Participant('Puller', {
    pullSuccess: Fun([Token], Null),
    sendingTokenToContract: Fun([], Null),
    transferringTokenToFungiblApp: Fun([], Null),
    transferringNftToPuller: Fun([], Null),
  })
  const Oracle = API('Oracle', {
    verifyNftIsSubmitted: Fun([], Bool),
    // Args: pullerAddress, additionalCost, refundAmount, platformFee
    setPullDetails: Fun([Address, UInt, UInt, UInt], Null),
  })

  init()

  // Contract created by nodejs backend and verifiable info provided
  Deployer.only(() => {
    const nftAssetId = declassify(interact.nftAssetId)
    const funToken = declassify(interact.funToken)
    assume(funToken != nftAssetId)
    const fungiblAddress = declassify(interact.fungiblAddress)
    const submitterAddress = declassify(interact.submitterAddress)
    // const creatorAddress = declassify(interact.creatorAddress)
    // const creatorDonation = declassify(interact.creatorDonation)
  })
  Deployer.publish(nftAssetId, funToken, fungiblAddress, submitterAddress)
  // some just in case checks, although this should be true
  require(funToken != nftAssetId, "NFT is $FUN ASA")
  commit()

  Submitter.only(() => {
    assume(addressEq(Submitter, submitterAddress))
  })
  Submitter.publish()
  require(addressEq(Submitter,submitterAddress), "Invalid Submitter (must match Account specified by Fungibl back-end")
  commit()

  Submitter.interact.signingTransfer()
  Submitter.pay([[1, nftAssetId]])
  require(balance(nftAssetId) == 1)
  commit()
  Submitter.interact.submitSuccess(nftAssetId)

  // Deployer validates that the contract can continue based on database info
  const [[], returnIsNftSubmitted] = call(Oracle.verifyNftIsSubmitted).assume(() => {
    check(this == Deployer, "Invalid Oracle (must be Deployer)")
  })
  require(this == Deployer, "Invalid Oracle (must be Deployer)")
  const isNftSubmitted = balance(nftAssetId) == 1
  returnIsNftSubmitted(isNftSubmitted)
  commit()



  // Deployer sets the Verified Puller that is allowed to attach to the contract
  const [[pullerAddress, additionalCost, refundAmount, platformFee], returnNothing] =
  call(Oracle.setPullDetails).assume((pullerAddress, additionalCost, refundAmount, platformFee) => { // checks in local step
    check(typeof (pullerAddress) == Address, "Invalid Address for Puller") // ensure pullerAddress is valid Address
    check(this == Deployer, "Invalid Oracle (must be Deployer)") // ensure API caller is Deployer
  })
  require(this == Deployer, "Invalid Oracle (must be Deployer)") // check consensus step API caller is Deployer
  // this needs to be separate call if we are going to do it
  // Oracle.pay([[refundAmount, funToken]])
  returnNothing(null)
  commit()


  Puller.only(() => {
    assume(addressEq(Puller, pullerAddress))
  })
  Puller.publish()
  require(Puller == pullerAddress, "Invalid Puller")
  commit()

  Puller.interact.sendingTokenToContract()
  Puller.pay([[additionalCost, funToken]])
  commit()
  Puller.pay(platformFee)
  //not doing this at the moment, might later
  //transfer(refundAmount, funToken).to(Puller)
  transfer(additionalCost, funToken).to(Deployer)
  transfer(platformFee).to(Deployer)
  Puller.interact.transferringNftToPuller()
  transfer(1, nftAssetId).to(Puller)
  commit()

  Puller.interact.pullSuccess(nftAssetId)

  exit()
})
