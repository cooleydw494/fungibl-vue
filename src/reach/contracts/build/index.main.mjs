// Automatically generated with Reach 0.1.11 (da882525)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (da882525)';
export const _backendVersion = 23;

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
  appApproval: `BiAHAAEEAgOgjQYoJgIBAAAiNQAxGEECRilkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAASVJIQQMQACeIQQSRCEENAESRDQESSISTDQCEhFEKGRJNQNJSiJbNf9XCCA1/iEGWzX9gVBbNfyABKdlxLSwNP00/IgCCTT+MQASRLEisgE0/bISJLIQNANXMCCyFDT8shGzsSKyASOyEiSyEDT+shQ0/7IRs7EisgEishIkshAyCbIVMgqyFDT8shGzsSKyASKyEiSyEDIJshUyCrIUNP+yEbNCASNIJTQBEkQ0BEkiEkw0AhIRRChkSTUDFzX/STUFSUkiWzX+VwggNf0hBls1/IAE5Qs1XDT+FlA0/VA0/BZQsDT8NP8TRCEFiAFHsSKyASKyEiSyEDIKshQ0/LIRszT/FjEAUDT+FlA0/VA0/BZQKEsBVwBYZ0ghBDUBMgY1AkIAv0kjDEAARkgjNAESRDQESSISTDQCEhFEKGRJNQOBIFs1/4AEmouRdLAjNP+IAPo0A1cAIDEAEkQ0/xYoSwFXAAhnSCU1ATIGNQJCAHNIIQWIAL4iNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhBYgAmLEisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v142",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v142",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v171",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v172",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v171",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v172",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001050380380620010508339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b610d7380620002dd6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c1461009657806383230757146100a9578063ab53f2c6146100be578063b680d929146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a08565b6100f4565b61005d6100a4366004610a08565b610297565b3480156100b557600080fd5b50600154610070565b3480156100ca57600080fd5b506100d3610428565b60405161007a929190610a4c565b61005d6100ef366004610a86565b6104c5565b610104600160005414600b6106f5565b61011e8135158061011757506001548235145b600c6106f5565b60008080556002805461013090610a98565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a98565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610ae2565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610b5d565b60405180910390a1610208341560086106f5565b61022261021b338360200151600161071b565b60096106f5565b805161023a906001600160a01b03163314600a6106f5565b60408051602080820183526000808352848201516001600160a01b03168084526002909155436001558351918201529091015b60405160208183030381529060405260029080519060200190610291929190610932565b50505050565b6102a760036000541460146106f5565b6102c1813515806102ba57506001548235145b60156106f5565b6000808055600280546102d390610a98565b80601f01602080910402602001604051908101604052809291908181526020018280546102ff90610a98565b801561034c5780601f106103215761010080835404028352916020019161034c565b820191906000526020600020905b81548152906001019060200180831161032f57829003601f168201915b50505050508060200190518101906103649190610b95565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610397929190610b5d565b60405180910390a16103ab341560116106f5565b6103c86103c1338360800151846040015161071b565b60126106f5565b60208101516103e3906001600160a01b0316331460136106f5565b6103fa816080015182606001518360400151610733565b61040e816000015182602001516001610733565b60008080556001819055610424906002906109b6565b5050565b60006060600054600280805461043d90610a98565b80601f016020809104026020016040519081016040528092919081815260200182805461046990610a98565b80156104b65780601f1061048b576101008083540402835291602001916104b6565b820191906000526020600020905b81548152906001019060200180831161049957829003601f168201915b50505050509050915091509091565b6104d5600260005414600f6106f5565b6104ef813515806104e857506001548235145b60106106f5565b60008080556002805461050190610a98565b80601f016020809104026020016040519081016040528092919081815260200182805461052d90610a98565b801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b50505050508060200190518101906105929190610c32565b90507f8373b82ebcaad3dcb9477153fd838a77b8e1472075d23ced9f8ea5b7ef35e53e33836040516105c5929190610c8c565b60405180910390a1805161060b906001600160a01b03166105ec6080850160608601610ce7565b6001600160a01b031614610601576001610604565b60005b600d6106f5565b6106173415600e6106f5565b6040805160a081018252600080825260208083018281528385018381526060808601859052608086019490945286516001600160a01b0316855233909152908601359052909161066b918501908501610ce7565b6001600160a01b031660608083019190915261068d9060808501908501610ce7565b6001600160a01b0316608082015260036000554360015560405161026d90829060200181516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151821690830152608092830151169181019190915260a00190565b816104245760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006107298385308561074c565b90505b9392505050565b61073e838383610826565b61074757600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916107b391610d04565b60006040518083038185875af1925050503d80600081146107f0576040519150601f19603f3d011682016040523d82523d6000602084013e6107f5565b606091505b5091509150610806828260016108f7565b508080602001905181019061081b9190610d20565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161088591610d04565b60006040518083038185875af1925050503d80600081146108c2576040519150601f19603f3d011682016040523d82523d6000602084013e6108c7565b606091505b50915091506108d8828260026108f7565b50808060200190518101906108ed9190610d20565b9695505050505050565b6060831561090657508161072c565b8251156109165782518084602001fd5b60405163100960cb60e01b815260048101839052602401610712565b82805461093e90610a98565b90600052602060002090601f01602090048101928261096057600085556109a6565b82601f1061097957805160ff19168380011785556109a6565b828001600101855582156109a6579182015b828111156109a657825182559160200191906001019061098b565b506109b29291506109f3565b5090565b5080546109c290610a98565b6000825580601f106109d2575050565b601f0160209004906000526020600020908101906109f091906109f3565b50565b5b808211156109b257600081556001016109f4565b600060408284031215610a1a57600080fd5b50919050565b60005b83811015610a3b578181015183820152602001610a23565b838111156102915750506000910152565b8281526040602082015260008251806040840152610a71816060850160208701610a20565b601f01601f1916919091016060019392505050565b600060808284031215610a1a57600080fd5b600181811c90821680610aac57607f821691505b60208210811415610a1a57634e487b7160e01b600052602260045260246000fd5b6001600160a01b03811681146109f057600080fd5b600060408284031215610af457600080fd5b6040516040810181811067ffffffffffffffff82111715610b2557634e487b7160e01b600052604160045260246000fd5b6040528251610b3381610acd565b81526020830151610b4381610acd565b60208201529392505050565b80151581146109f057600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610b8581610b4f565b8015156040840152509392505050565b600060a08284031215610ba757600080fd5b60405160a0810181811067ffffffffffffffff82111715610bd857634e487b7160e01b600052604160045260246000fd5b6040528251610be681610acd565b81526020830151610bf681610acd565b6020820152604083810151908201526060830151610c1381610acd565b60608201526080830151610c2681610acd565b60808201529392505050565b600060208284031215610c4457600080fd5b6040516020810181811067ffffffffffffffff82111715610c7557634e487b7160e01b600052604160045260246000fd5b6040528251610c8381610acd565b81529392505050565b600060a08201905060018060a01b03808516835283356020840152602084013560408401526040840135610cbf81610acd565b8181166060850152506060840135610cd681610acd565b818116608085015250509392505050565b600060208284031215610cf957600080fd5b813561072c81610acd565b60008251610d16818460208701610a20565b9190910192915050565b600060208284031215610d3257600080fd5b815161072c81610b4f56fea2646970667358221220cd37ccfe48c79db4884d88b0e88bfa4ba0af0e57838d39c08fe4be585fbe6a0664736f6c634300080c0033`,
  BytecodeLen: 4176,
  Which: `oD`,
  version: 8,
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
