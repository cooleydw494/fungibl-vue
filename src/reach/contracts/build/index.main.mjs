// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc1],
      3: [ctc1, ctc0, ctc2, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Puller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Puller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Puller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v142], secs: v144, time: v143, didSend: v27, from: v141 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v153, time: v152, didSend: v42, from: v151 } = txn2;
  ;
  ;
  const v160 = stdlib.addressEq(v141, v151);
  stdlib.assert(v160, {
    at: './index.rsh:30:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  const v164 = stdlib.protect(ctc1, await interact.getPullCost(), {
    at: './index.rsh:36:53:application',
    fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:18:function exp)'],
    msg: 'getPullCost',
    who: 'Puller'
    });
  const v165 = stdlib.protect(ctc2, await interact.getFungiblAppWallet(), {
    at: './index.rsh:37:69:application',
    fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:18:function exp)'],
    msg: 'getFungiblAppWallet',
    who: 'Puller'
    });
  const v166 = stdlib.protect(ctc0, await interact.getFunToken(), {
    at: './index.rsh:38:53:application',
    fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:18:function exp)'],
    msg: 'getFunToken',
    who: 'Puller'
    });
  const v167 = stdlib.tokenEq(v166, v142);
  const v168 = v167 ? false : true;
  stdlib.assert(v168, {
    at: './index.rsh:39:11:application',
    fs: ['at ./index.rsh:35:14:application call to [unknown function] (defined at: ./index.rsh:35:18:function exp)'],
    msg: null,
    who: 'Puller'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v142, v164, v165, v166],
    evt_cnt: 3,
    funcNum: 2,
    lct: v152,
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v170, v171, v172], secs: v174, time: v173, didSend: v64, from: v169 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v172
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v170, v171, v172], secs: v174, time: v173, didSend: v64, from: v169 } = txn3;
  const v179 = stdlib.tokenEq(v172, v142);
  const v180 = v179 ? false : true;
  stdlib.assert(v180, {
    at: './index.rsh:42:10:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Puller'
    });
  ;
  ;
  stdlib.protect(ctc3, await interact.sendingTokenToContract(), {
    at: './index.rsh:46:41:application',
    fs: ['at ./index.rsh:46:41:application call to [unknown function] (defined at: ./index.rsh:46:41:function exp)', 'at ./index.rsh:46:41:application call to "liftedInteract" (defined at: ./index.rsh:46:41:application)'],
    msg: 'sendingTokenToContract',
    who: 'Puller'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v142, v169, v170, v171, v172],
    evt_cnt: 0,
    funcNum: 3,
    lct: v173,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:10:dot', stdlib.UInt_max, '0'), [[v170, v172]]],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v184, time: v183, didSend: v75, from: v182 } = txn4;
      
      ;
      sim_r.txns.push({
        amt: v170,
        kind: 'to',
        tok: v172
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v171,
        tok: v172
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v169,
        tok: v142
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v172
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v142
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v184, time: v183, didSend: v75, from: v182 } = txn4;
  ;
  ;
  const v191 = stdlib.addressEq(v169, v182);
  stdlib.assert(v191, {
    at: './index.rsh:47:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  stdlib.protect(ctc3, await interact.transferringTokenToFungiblApp(), {
    at: './index.rsh:48:48:application',
    fs: ['at ./index.rsh:48:48:application call to [unknown function] (defined at: ./index.rsh:48:48:function exp)', 'at ./index.rsh:48:48:application call to "liftedInteract" (defined at: ./index.rsh:48:48:application)'],
    msg: 'transferringTokenToFungiblApp',
    who: 'Puller'
    });
  
  ;
  stdlib.protect(ctc3, await interact.transferringNftToPuller(), {
    at: './index.rsh:50:42:application',
    fs: ['at ./index.rsh:50:42:application call to [unknown function] (defined at: ./index.rsh:50:42:function exp)', 'at ./index.rsh:50:42:application call to "liftedInteract" (defined at: ./index.rsh:50:42:application)'],
    msg: 'transferringNftToPuller',
    who: 'Puller'
    });
  
  ;
  stdlib.protect(ctc3, await interact.pullSuccess(v142), {
    at: './index.rsh:54:30:application',
    fs: ['at ./index.rsh:54:30:application call to [unknown function] (defined at: ./index.rsh:54:30:function exp)', 'at ./index.rsh:54:30:application call to "liftedInteract" (defined at: ./index.rsh:54:30:application)'],
    msg: 'pullSuccess',
    who: 'Puller'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function Submitter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Submitter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Submitter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  
  const v140 = stdlib.protect(ctc0, await interact.getNftAssetId(), {
    at: './index.rsh:23:57:application',
    fs: ['at ./index.rsh:22:17:application call to [unknown function] (defined at: ./index.rsh:22:21:function exp)'],
    msg: 'getNftAssetId',
    who: 'Submitter'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v140],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v142], secs: v144, time: v143, didSend: v27, from: v141 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v142
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v142], secs: v144, time: v143, didSend: v27, from: v141 } = txn1;
  ;
  ;
  stdlib.protect(ctc1, await interact.initializing(), {
    at: './index.rsh:26:34:application',
    fs: ['at ./index.rsh:26:34:application call to [unknown function] (defined at: ./index.rsh:26:34:function exp)', 'at ./index.rsh:26:34:application call to "liftedInteract" (defined at: ./index.rsh:26:34:application)'],
    msg: 'initializing',
    who: 'Submitter'
    });
  
  stdlib.protect(ctc1, await interact.signingTransfer(), {
    at: './index.rsh:28:37:application',
    fs: ['at ./index.rsh:28:37:application call to [unknown function] (defined at: ./index.rsh:28:37:function exp)', 'at ./index.rsh:28:37:application call to "liftedInteract" (defined at: ./index.rsh:28:37:application)'],
    msg: 'signingTransfer',
    who: 'Submitter'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v141, v142],
    evt_cnt: 0,
    funcNum: 1,
    lct: v143,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:30:19:decimal', stdlib.UInt_max, '1'), v142]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v153, time: v152, didSend: v42, from: v151 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:30:19:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v142
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v153, time: v152, didSend: v42, from: v151 } = txn2;
  ;
  ;
  const v160 = stdlib.addressEq(v141, v151);
  stdlib.assert(v160, {
    at: './index.rsh:30:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  stdlib.protect(ctc1, await interact.submitSuccess(v142), {
    at: './index.rsh:32:35:application',
    fs: ['at ./index.rsh:32:35:application call to [unknown function] (defined at: ./index.rsh:32:35:function exp)', 'at ./index.rsh:32:35:application call to "liftedInteract" (defined at: ./index.rsh:32:35:application)'],
    msg: 'submitSuccess',
    who: 'Submitter'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 2,
    out_tys: [ctc2, ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v170, v171, v172], secs: v174, time: v173, didSend: v64, from: v169 } = txn3;
  const v179 = stdlib.tokenEq(v172, v142);
  const v180 = v179 ? false : true;
  stdlib.assert(v180, {
    at: './index.rsh:42:10:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Submitter'
    });
  ;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v184, time: v183, didSend: v75, from: v182 } = txn4;
  ;
  ;
  const v191 = stdlib.addressEq(v169, v182);
  stdlib.assert(v191, {
    at: './index.rsh:47:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAHAAEEAgOgjQYoJgIBAAAiNQAxGEECRilkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAASVJIQQMQACeIQQSRCEENAESRDQESSISTDQCEhFEKGRJNQNJSiJbNf9XCCA1/iEGWzX9gVBbNfyABKdlxLSwNP00/IgCCTT+MQASRLEisgE0/bISJLIQNANXMCCyFDT8shGzsSKyASOyEiSyEDT+shQ0/7IRs7EisgEishIkshAyCbIVMgqyFDT8shGzsSKyASKyEiSyEDIJshUyCrIUNP+yEbNCASNIJTQBEkQ0BEkiEkw0AhIRRChkSTUDFzX/STUFSUkiWzX+VwggNf0hBls1/IAE5Qs1XDT+FlA0/VA0/BZQsDT8NP8TRCEFiAFHsSKyASKyEiSyEDIKshQ0/LIRszT/FjEAUDT+FlA0/VA0/BZQKEsBVwBYZ0ghBDUBMgY1AkIAv0kjDEAARkgjNAESRDQESSISTDQCEhFEKGRJNQOBIFs1/4AEmouRdLAjNP+IAPo0A1cAIDEAEkQ0/xYoSwFXAAhnSCU1ATIGNQJCAHNIIQWIAL4iNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhBYgAmLEisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"v266","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v268","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T4","name":"v270","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v272","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x620012a660806001600160401b03601f1938849003601f8101821684019084821084831117620002f957808591604097889485528339810103126200030f5783516200004b8162000314565b835181526020938401516001600160a01b039490919085831683036200030f578082019283524360035586519181830183811087821117620002f9578852600080935260049060ff825416620002e2577fdfc9ca24641405bcf22714584c5a6a755e437739bd3255aaabe0d859c10c4e1360608a513381528351868201528a8851168c820152a1518015908115620002d5575b5015620002be5734620002a75786885194620000fa8662000314565b8386019585875233905251168452600196878455438855885194338487015251168885015287845260608401848110878211176200029457885283519586116200028157600254908782811c9216801562000276575b83831014620002635750601f811162000217575b508093601f8611600114620001af57505091839491849394620001a3575b50501b916000199060031b1c1916176002555b51610f759081620003318239f35b01519250388062000182565b600283528183209493928692918316915b88838310620001fc5750505010620001e2575b505050811b0160025562000195565b015160001960f88460031b161c19169055388080620001d3565b858701518855909601959485019487935090810190620001c0565b60028352818320601f870160051c81019183881062000258575b601f0160051c019087905b8281106200024c57505062000164565b8481550187906200023c565b909150819062000231565b634e487b7160e01b845260229052602483fd5b91607f169162000150565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000de565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b03821117620002f95760405256fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f1146100935750806330f61f331461008a57806341712c0a14610081578063573b851014610078578063832307571461006f5763ab53f2c60361000e5761006a6105c7565b61000e565b5061006a6105a8565b5061006a610472565b5061006a610310565b5061006a6100b2565b346100af57806003193601126100af5760035460805260206080f35b80fd5b5060803660031901126102fa576040600081516100ce8161068a565b526102da6102c76102d583516100e3816106b2565b600435815261026861025f6020830160243581526102596102506044356101098161082b565b8a87019081526064359361011c8561082b565b6060880194855261013e61013961013560045460ff1690565b1590565b6109e2565b8b5133815288516020808301919091528901516040808301919091528901516001600160a01b039081166060808401919091528a01511660808201527fd45683a196c66db76f77ebf87c730e56866567cf3a2ecf2340900c40b398c5159060a090a16101ae600260005414610a02565b6101dd6101cb6101bc61070b565b60208082518301019101610d79565b985180159081156102ee575b50610a22565b6101e78551610805565b6101f96101f48a51610805565b610805565b6001600160a01b03909116036102e4576102136000610a42565b61021d3415610a62565b61023861023261022b610da0565b9951610805565b89610894565b6102453360208a01610894565b518b88015251610805565b60608601610894565b51610805565b60808301610894565b6102726003600055565b61027b43600155565b845192839160208301919091608060a08201938160018060a01b039182815116855282602082015116602086015260408101516040860152826060820151166060860152015116910152565b03601f1981018352826106e8565b6108ff565b5160008152602090f35b6102136001610a42565b905060015414386101d7565b600080fd5b60209060031901126102fa57600490565b50610444610336610320366102ff565b600060405161032e8161068a565b5236906107c9565b61034d61034861013560045460ff1690565b610a82565b7fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e85156040518061037d843383610811565b0390a161038e600360005414610aa2565b6103bd6103ab61039c61070b565b60208082518301019101610dcb565b91518015908115610466575b50610ac2565b6103c73415610ae2565b6080810161043d6104366103db8351610805565b936103f56103f0604083019687519033610c71565b610b02565b610259602082019561041e60018060a01b039661025933896104178c51610805565b1614610b22565b8661042c6060860151610805565b9251921690610f0a565b9251610805565b1690610ead565b600080556104526000600155565b61045a610e35565b60405160008152602090f35b905060015414386103b7565b5061045a6102c76102d5610488610320366102ff565b61049f61049a61013560045460ff1690565b610b42565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806104cf843383610811565b0390a16104e0600160005414610b62565b61050f6104fd6104ee61070b565b6020808251830101910161083c565b9151801590811561059c575b50610b82565b6105193415610ba2565b610558602082019161053c6105376105318551610805565b33610c02565b610bc2565b5133906001600160a01b039061055190610805565b1614610be2565b61056c6105666104366107b6565b82610894565b6105766002600055565b61057f43600155565b6040805191516001600160a01b0316602083015290928391820190565b90506001541438610509565b50346102fa5760003660031901126102fa576020600154604051908152f35b50346102fa576000806003193601126100af5780546105e461070b565b906040519283918252602090604082840152835191826040850152815b83811061062257505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610601565b90600182811c92168015610669575b602083101461065357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610648565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176106a557604052565b6106ad610673565b604052565b608081019081106001600160401b038211176106a557604052565b60a081019081106001600160401b038211176106a557604052565b601f909101601f19168101906001600160401b038211908210176106a557604052565b604051906000826002549161071f83610639565b8083526001938085169081156107955750600114610747575b50610745925003836106e8565b565b60026000908152600080516020610f4983398151915294602093509091905b81831061077d575050610745935082010138610738565b85548884018501529485019487945091830191610766565b905061074594506020925060ff191682840152151560051b82010138610738565b604051906107c38261068a565b60008252565b91908260209103126102fa57604051602081016001600160401b038111828210176107f8575b60405291358252565b610800610673565b6107ef565b6001600160a01b031690565b6001600160a01b0390911681529051602082015260400190565b6001600160a01b038116036102fa57565b908160409103126102fa57604080519160209183016001600160401b03811184821017610887575b60405280516108728161082b565b8352015161087f8161082b565b602082015290565b61088f610673565b610864565b6001600160a01b039091169052565b8181106108ae575050565b600081556001016108a3565b90601f82116108c7575050565b6107459160026000526020600020906020601f840160051c830193106108f5575b601f0160051c01906108a3565b90915081906108e8565b80519091906001600160401b0381116109d5575b61092781610922600254610639565b6108ba565b602080601f83116001146109635750819293600092610958575b50508160011b916000199060031b1c191617600255565b015190503880610941565b6002600052601f19831694909190600080516020610f49833981519152926000905b8782106109bd5750508360019596106109a4575b505050811b01600255565b015160001960f88460031b161c19169055388080610999565b80600185968294968601518155019501930190610985565b6109dd610673565b610913565b156109e957565b60405163100960cb60e01b815260106004820152602490fd5b15610a0957565b60405163100960cb60e01b815260116004820152602490fd5b15610a2957565b60405163100960cb60e01b815260126004820152602490fd5b15610a4957565b60405163100960cb60e01b815260136004820152602490fd5b15610a6957565b60405163100960cb60e01b815260146004820152602490fd5b15610a8957565b60405163100960cb60e01b815260156004820152602490fd5b15610aa957565b60405163100960cb60e01b815260166004820152602490fd5b15610ac957565b60405163100960cb60e01b815260176004820152602490fd5b15610ae957565b60405163100960cb60e01b815260186004820152602490fd5b15610b0957565b60405163100960cb60e01b815260196004820152602490fd5b15610b2957565b60405163100960cb60e01b8152601a6004820152602490fd5b15610b4957565b60405163100960cb60e01b8152600a6004820152602490fd5b15610b6957565b60405163100960cb60e01b8152600b6004820152602490fd5b15610b8957565b60405163100960cb60e01b8152600c6004820152602490fd5b15610ba957565b60405163100960cb60e01b8152600d6004820152602490fd5b15610bc957565b60405163100960cb60e01b8152600e6004820152602490fd5b15610be957565b60405163100960cb60e01b8152600f6004820152602490fd5b6000610c6e928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201526001606482015260648152610c47816106cd565b5193165af1610c5e610c57610cb4565b8092610d19565b5060208082518301019101610d01565b90565b600091610c6e9383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152610c47816106cd565b3d15610cfc573d906001600160401b038211610cef575b60405191610ce3601f8201601f1916602001846106e8565b82523d6000602084013e565b610cf7610673565b610ccb565b606090565b908160209103126102fa575180151581036102fa5790565b15610d215790565b805115610d3057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15610d515790565b805115610d6057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b908160209103126102fa5760405190610d918261068a565b51610d9b8161082b565b815290565b60405190610dad826106cd565b60006080838281528260208201528260408201528260608201520152565b908160a09103126102fa57608060405191610de5836106cd565b8051610df08161082b565b83526020810151610e008161082b565b6020840152604081015160408401526060810151610e1d8161082b565b60608401520151610e2d8161082b565b608082015290565b610e40600254610639565b80610e485750565b601f8111600114610e5b57506000600255565b6002600052610ea090601f0160051c600080516020610f49833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6108a3565b6000602081208160025555565b60008091610f03938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526001604482015260448152610eec816106b2565b5193165af1610c5e610efc610cb4565b8092610d49565b156102fa57565b60009190610f0393838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152610eec816106b256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 4774,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:31:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:44:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:52:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Puller": Puller,
  "Submitter": Submitter
  };
export const _APIs = {
  };
