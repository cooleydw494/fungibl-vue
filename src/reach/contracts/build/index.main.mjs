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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0, ctc5],
      2: [ctc0, ctc1, ctc1, ctc5, ctc0],
      3: [ctc0, ctc1, ctc1, ctc3],
      4: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc2],
      6: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0],
      7: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc0]
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
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5, ctc5, ctc5]);
  
  
  const v251 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v252 = [v251, v251];
  const v256 = stdlib.protect(ctc0, interact.funToken, 'for Deployer\'s interact field funToken');
  const v257 = stdlib.protect(ctc1, interact.fungiblAddress, 'for Deployer\'s interact field fungiblAddress');
  const v258 = stdlib.protect(ctc0, interact.nftAssetId, 'for Deployer\'s interact field nftAssetId');
  const v259 = stdlib.protect(ctc1, interact.submitterAddress, 'for Deployer\'s interact field submitterAddress');
  
  stdlib.protect(ctc2, await interact.log(stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, '1')), {
    at: './index.rsh:38:17:application',
    fs: ['at ./index.rsh:37:16:application call to [unknown function] (defined at: ./index.rsh:37:20:function exp)'],
    msg: 'log',
    who: 'Deployer'
    });
  const v262 = stdlib.tokenEq(v256, v258);
  const v263 = v262 ? false : true;
  stdlib.assert(v263, {
    at: './index.rsh:41:11:application',
    fs: ['at ./index.rsh:37:16:application call to [unknown function] (defined at: ./index.rsh:37:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  stdlib.protect(ctc2, await interact.log(stdlib.checkedBigNumberify('./index.rsh:46:18:decimal', stdlib.UInt_max, '2')), {
    at: './index.rsh:46:17:application',
    fs: ['at ./index.rsh:37:16:application call to [unknown function] (defined at: ./index.rsh:37:20:function exp)'],
    msg: 'log',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v258, v256, v257, v259],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v265, v266, v267, v268], secs: v270, time: v269, didSend: v38, from: v264 } = txn1;
      
      const v271 = v252[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0')];
      const v272 = stdlib.Array_set(v271, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
      const v273 = stdlib.Array_set(v252, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'), v272);
      const v275 = v273[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1')];
      const v276 = stdlib.Array_set(v275, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
      const v277 = stdlib.Array_set(v273, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1'), v276);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v265
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v266
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v265, v266, v267, v268], secs: v270, time: v269, didSend: v38, from: v264 } = txn1;
  const v271 = v252[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0')];
  const v272 = stdlib.Array_set(v271, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
  const v273 = stdlib.Array_set(v252, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'), v272);
  const v275 = v273[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1')];
  const v276 = stdlib.Array_set(v275, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
  const v277 = stdlib.Array_set(v273, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1'), v276);
  const v279 = stdlib.tokenEq(v266, v265);
  const v280 = v279 ? false : true;
  stdlib.assert(v280, {
    at: './index.rsh:48:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
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
  const {data: [], secs: v286, time: v285, didSend: v46, from: v284 } = txn2;
  ;
  const v287 = stdlib.addressEq(v284, v268);
  stdlib.assert(v287, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Deployer'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v291, time: v290, didSend: v58, from: v289 } = txn3;
  ;
  const v292 = v277[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
  const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
  const v294 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '1'));
  const v296 = stdlib.Array_set(v292, '0', v294);
  const v297 = stdlib.Array_set(v277, stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0'), v296);
  ;
  const v298 = stdlib.addressEq(v284, v289);
  stdlib.assert(v298, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
  const v300 = v299[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
  const v301 = stdlib.eq(v300, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v301, {
    at: './index.rsh:62:10:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v310], secs: v312, time: v311, didSend: v91, from: v309 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v313 = stdlib.addressEq(v309, v264);
  stdlib.assert(v313, {
    at: './index.rsh:70:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Deployer'
    });
  await txn4.getOutput('Oracle_verifyNftSubmitted', 'v301', ctc4, v301);
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337], secs: v339, time: v338, didSend: v149, from: v336 } = txn5;
  undefined /* setApiDetails */;
  ;
  const v340 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '0')];
  const v341 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '1')];
  const v343 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '3')];
  const v344 = stdlib.addressEq(v336, v264);
  stdlib.assert(v344, {
    at: './index.rsh:83:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Deployer'
    });
  const v345 = null;
  await txn5.getOutput('Oracle_setPullDetails', 'v345', ctc2, v345);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v359, time: v358, didSend: v172, from: v357 } = txn6;
  ;
  const v360 = stdlib.addressEq(v357, v340);
  stdlib.assert(v360, {
    at: './index.rsh:94:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Deployer'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v364, time: v363, didSend: v184, from: v362 } = txn7;
  ;
  ;
  const v371 = stdlib.addressEq(v357, v362);
  stdlib.assert(v371, {
    at: './index.rsh:98:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn8 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 7,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v374, time: v373, didSend: v191, from: v372 } = txn8;
  ;
  const v377 = stdlib.addressEq(v357, v372);
  stdlib.assert(v377, {
    at: './index.rsh:100:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function _Oracle_setPullDetails4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_setPullDetails4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_setPullDetails4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v264, v265, v266] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1]);
  const v321 = ctc.selfAddress();
  const v323 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:78:3:application',
    fs: ['at ./index.rsh:78:3:application call to [unknown function] (defined at: ./index.rsh:78:3:function exp)'],
    msg: 'in',
    who: 'Oracle_setPullDetails'
    });
  const v334 = stdlib.addressEq(v321, v264);
  stdlib.assert(v334, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:3:application call to [unknown function] (defined at: ./index.rsh:79:97:function exp)', 'at ./index.rsh:78:3:application call to [unknown function] (defined at: ./index.rsh:78:3:function exp)'],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_setPullDetails'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v264, v265, v266, v323],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v337], secs: v339, time: v338, didSend: v149, from: v336 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Oracle_setPullDetails"
        });
      ;
      const v340 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '0')];
      const v341 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '1')];
      const v343 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '3')];
      const v345 = null;
      const v346 = await txn1.getOutput('Oracle_setPullDetails', 'v345', ctc4, v345);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v337], secs: v339, time: v338, didSend: v149, from: v336 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v340 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '0')];
  const v341 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '1')];
  const v343 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '3')];
  const v344 = stdlib.addressEq(v336, v264);
  stdlib.assert(v344, {
    at: './index.rsh:83:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_setPullDetails'
    });
  const v345 = null;
  const v346 = await txn1.getOutput('Oracle_setPullDetails', 'v345', ctc4, v345);
  stdlib.protect(ctc4, await interact.out(v337, v346), {
    at: './index.rsh:78:3:application',
    fs: ['at ./index.rsh:78:3:application call to [unknown function] (defined at: ./index.rsh:78:3:function exp)', 'at ./index.rsh:86:16:application call to "returnNothing" (defined at: ./index.rsh:78:3:function exp)'],
    msg: 'out',
    who: 'Oracle_setPullDetails'
    });
  
  return;
  
  
  
  };
export async function _Oracle_verifyNftSubmitted3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_verifyNftSubmitted3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_verifyNftSubmitted3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v264, v265, v266, v301] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2]);
  const v303 = ctc.selfAddress();
  const v305 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:67:3:application',
    fs: ['at ./index.rsh:67:3:application call to [unknown function] (defined at: ./index.rsh:67:3:function exp)'],
    msg: 'in',
    who: 'Oracle_verifyNftSubmitted'
    });
  const v307 = stdlib.addressEq(v303, v264);
  stdlib.assert(v307, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:3:application call to [unknown function] (defined at: ./index.rsh:67:80:function exp)', 'at ./index.rsh:67:3:application call to [unknown function] (defined at: ./index.rsh:67:3:function exp)'],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_verifyNftSubmitted'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v264, v265, v266, v301, v305],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v310], secs: v312, time: v311, didSend: v91, from: v309 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Oracle_verifyNftSubmitted"
        });
      ;
      const v317 = await txn1.getOutput('Oracle_verifyNftSubmitted', 'v301', ctc2, v301);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v310], secs: v312, time: v311, didSend: v91, from: v309 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v313 = stdlib.addressEq(v309, v264);
  stdlib.assert(v313, {
    at: './index.rsh:70:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_verifyNftSubmitted'
    });
  const v317 = await txn1.getOutput('Oracle_verifyNftSubmitted', 'v301', ctc2, v301);
  stdlib.protect(ctc4, await interact.out(v310, v317), {
    at: './index.rsh:67:3:application',
    fs: ['at ./index.rsh:67:3:application call to [unknown function] (defined at: ./index.rsh:67:3:function exp)', 'at ./index.rsh:72:23:application call to "returnIsNftSubmitted" (defined at: ./index.rsh:67:3:function exp)'],
    msg: 'out',
    who: 'Oracle_verifyNftSubmitted'
    });
  
  return;
  
  
  
  };
export async function Puller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Puller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Puller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Null;
  
  
  const v251 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v252 = [v251, v251];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v265, v266, v267, v268], secs: v270, time: v269, didSend: v38, from: v264 } = txn1;
  const v271 = v252[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0')];
  const v272 = stdlib.Array_set(v271, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
  const v273 = stdlib.Array_set(v252, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'), v272);
  const v275 = v273[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1')];
  const v276 = stdlib.Array_set(v275, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
  const v277 = stdlib.Array_set(v273, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1'), v276);
  const v279 = stdlib.tokenEq(v266, v265);
  const v280 = v279 ? false : true;
  stdlib.assert(v280, {
    at: './index.rsh:48:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Puller'
    });
  ;
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
  const {data: [], secs: v286, time: v285, didSend: v46, from: v284 } = txn2;
  ;
  const v287 = stdlib.addressEq(v284, v268);
  stdlib.assert(v287, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Puller'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v291, time: v290, didSend: v58, from: v289 } = txn3;
  ;
  const v292 = v277[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
  const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
  const v294 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '1'));
  const v296 = stdlib.Array_set(v292, '0', v294);
  const v297 = stdlib.Array_set(v277, stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0'), v296);
  ;
  const v298 = stdlib.addressEq(v284, v289);
  stdlib.assert(v298, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
  const v300 = v299[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
  const v301 = stdlib.eq(v300, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v301, {
    at: './index.rsh:62:10:application',
    fs: [],
    msg: null,
    who: 'Puller'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v310], secs: v312, time: v311, didSend: v91, from: v309 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v313 = stdlib.addressEq(v309, v264);
  stdlib.assert(v313, {
    at: './index.rsh:70:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Puller'
    });
  await txn4.getOutput('Oracle_verifyNftSubmitted', 'v301', ctc3, v301);
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337], secs: v339, time: v338, didSend: v149, from: v336 } = txn5;
  undefined /* setApiDetails */;
  ;
  const v340 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '0')];
  const v341 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '1')];
  const v343 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '3')];
  const v344 = stdlib.addressEq(v336, v264);
  stdlib.assert(v344, {
    at: './index.rsh:83:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Puller'
    });
  const v345 = null;
  await txn5.getOutput('Oracle_setPullDetails', 'v345', ctc6, v345);
  const v354 = ctc.selfAddress();
  const v356 = stdlib.addressEq(v354, v340);
  stdlib.assert(v356, {
    at: './index.rsh:91:11:application',
    fs: ['at ./index.rsh:90:14:application call to [unknown function] (defined at: ./index.rsh:90:18:function exp)'],
    msg: null,
    who: 'Puller'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v264, v265, v266, v340, v341, v343],
    evt_cnt: 0,
    funcNum: 5,
    lct: v338,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v359, time: v358, didSend: v172, from: v357 } = txn6;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v359, time: v358, didSend: v172, from: v357 } = txn6;
  ;
  const v360 = stdlib.addressEq(v357, v340);
  stdlib.assert(v360, {
    at: './index.rsh:94:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Puller'
    });
  stdlib.protect(ctc6, await interact.sendingTokenToContract(), {
    at: './index.rsh:97:41:application',
    fs: ['at ./index.rsh:97:41:application call to [unknown function] (defined at: ./index.rsh:97:41:function exp)', 'at ./index.rsh:97:41:application call to "liftedInteract" (defined at: ./index.rsh:97:41:application)'],
    msg: 'sendingTokenToContract',
    who: 'Puller'
    });
  
  const txn7 = await (ctc.sendrecv({
    args: [v264, v265, v266, v341, v343, v357],
    evt_cnt: 0,
    funcNum: 6,
    lct: v358,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:98:10:dot', stdlib.UInt_max, '0'), [[v341, v266]]],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v364, time: v363, didSend: v184, from: v362 } = txn7;
      
      ;
      sim_r.txns.push({
        amt: v341,
        kind: 'to',
        tok: v266
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc4, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v364, time: v363, didSend: v184, from: v362 } = txn7;
  ;
  ;
  const v371 = stdlib.addressEq(v357, v362);
  stdlib.assert(v371, {
    at: './index.rsh:98:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  const txn8 = await (ctc.sendrecv({
    args: [v264, v265, v266, v341, v343, v357],
    evt_cnt: 0,
    funcNum: 7,
    lct: v363,
    onlyIf: true,
    out_tys: [],
    pay: [v343, []],
    sim_p: (async (txn8) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v374, time: v373, didSend: v191, from: v372 } = txn8;
      
      sim_r.txns.push({
        amt: v343,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v264,
        tok: v266
        });
      sim_r.txns.push({
        kind: 'from',
        to: v264,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v357,
        tok: v265
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v266
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v265
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
    tys: [ctc1, ctc0, ctc0, ctc4, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v374, time: v373, didSend: v191, from: v372 } = txn8;
  ;
  const v377 = stdlib.addressEq(v357, v372);
  stdlib.assert(v377, {
    at: './index.rsh:100:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  ;
  ;
  stdlib.protect(ctc6, await interact.transferringNftToPuller(), {
    at: './index.rsh:105:42:application',
    fs: ['at ./index.rsh:105:42:application call to [unknown function] (defined at: ./index.rsh:105:42:function exp)', 'at ./index.rsh:105:42:application call to "liftedInteract" (defined at: ./index.rsh:105:42:application)'],
    msg: 'transferringNftToPuller',
    who: 'Puller'
    });
  
  ;
  stdlib.protect(ctc6, await interact.pullSuccess(v265), {
    at: './index.rsh:109:30:application',
    fs: ['at ./index.rsh:109:30:application call to [unknown function] (defined at: ./index.rsh:109:30:function exp)', 'at ./index.rsh:109:30:application call to "liftedInteract" (defined at: ./index.rsh:109:30:application)'],
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5, ctc5, ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v251 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v252 = [v251, v251];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v265, v266, v267, v268], secs: v270, time: v269, didSend: v38, from: v264 } = txn1;
  const v271 = v252[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0')];
  const v272 = stdlib.Array_set(v271, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
  const v273 = stdlib.Array_set(v252, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'), v272);
  const v275 = v273[stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1')];
  const v276 = stdlib.Array_set(v275, '0', stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'));
  const v277 = stdlib.Array_set(v273, stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '1'), v276);
  const v279 = stdlib.tokenEq(v266, v265);
  const v280 = v279 ? false : true;
  stdlib.assert(v280, {
    at: './index.rsh:48:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Submitter'
    });
  ;
  ;
  ;
  const v281 = ctc.selfAddress();
  const v283 = stdlib.addressEq(v281, v268);
  stdlib.assert(v283, {
    at: './index.rsh:54:11:application',
    fs: ['at ./index.rsh:53:17:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)'],
    msg: null,
    who: 'Submitter'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v264, v265, v266, v268, v277],
    evt_cnt: 0,
    funcNum: 1,
    lct: v269,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v286, time: v285, didSend: v46, from: v284 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v286, time: v285, didSend: v46, from: v284 } = txn2;
  ;
  const v287 = stdlib.addressEq(v284, v268);
  stdlib.assert(v287, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Submitter'
    });
  stdlib.protect(ctc2, await interact.signingTransfer(), {
    at: './index.rsh:60:37:application',
    fs: ['at ./index.rsh:60:37:application call to [unknown function] (defined at: ./index.rsh:60:37:function exp)', 'at ./index.rsh:60:37:application call to "liftedInteract" (defined at: ./index.rsh:60:37:application)'],
    msg: 'signingTransfer',
    who: 'Submitter'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v264, v265, v266, v277, v284],
    evt_cnt: 0,
    funcNum: 2,
    lct: v285,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '1'), v265]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v291, time: v290, didSend: v58, from: v289 } = txn3;
      
      ;
      const v292 = v277[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
      const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
      const v294 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '1'));
      const v296 = stdlib.Array_set(v292, '0', v294);
      const v297 = stdlib.Array_set(v277, stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0'), v296);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v265
        });
      const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
      const v300 = v299[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
      const v301 = stdlib.eq(v300, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc8, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v291, time: v290, didSend: v58, from: v289 } = txn3;
  ;
  const v292 = v277[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
  const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0')];
  const v294 = stdlib.add(v293, stdlib.checkedBigNumberify('./index.rsh:61:19:decimal', stdlib.UInt_max, '1'));
  const v296 = stdlib.Array_set(v292, '0', v294);
  const v297 = stdlib.Array_set(v277, stdlib.checkedBigNumberify('./index.rsh:61:13:dot', stdlib.UInt_max, '0'), v296);
  ;
  const v298 = stdlib.addressEq(v284, v289);
  stdlib.assert(v298, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
  const v300 = v299[stdlib.checkedBigNumberify('./index.rsh:62:18:application', stdlib.UInt_max, '0')];
  const v301 = stdlib.eq(v300, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v301, {
    at: './index.rsh:62:10:application',
    fs: [],
    msg: null,
    who: 'Submitter'
    });
  stdlib.protect(ctc2, await interact.submitSuccess(v265), {
    at: './index.rsh:64:35:application',
    fs: ['at ./index.rsh:64:35:application call to [unknown function] (defined at: ./index.rsh:64:35:function exp)', 'at ./index.rsh:64:35:application call to "liftedInteract" (defined at: ./index.rsh:64:35:application)'],
    msg: 'submitSuccess',
    who: 'Submitter'
    });
  
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v310], secs: v312, time: v311, didSend: v91, from: v309 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v313 = stdlib.addressEq(v309, v264);
  stdlib.assert(v313, {
    at: './index.rsh:70:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Submitter'
    });
  await txn4.getOutput('Oracle_verifyNftSubmitted', 'v301', ctc4, v301);
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337], secs: v339, time: v338, didSend: v149, from: v336 } = txn5;
  undefined /* setApiDetails */;
  ;
  const v340 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '0')];
  const v341 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '1')];
  const v343 = v337[stdlib.checkedBigNumberify('./index.rsh:78:10:array', stdlib.UInt_max, '3')];
  const v344 = stdlib.addressEq(v336, v264);
  stdlib.assert(v344, {
    at: './index.rsh:83:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Submitter'
    });
  const v345 = null;
  await txn5.getOutput('Oracle_setPullDetails', 'v345', ctc2, v345);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v359, time: v358, didSend: v172, from: v357 } = txn6;
  ;
  const v360 = stdlib.addressEq(v357, v340);
  stdlib.assert(v360, {
    at: './index.rsh:94:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Submitter'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v364, time: v363, didSend: v184, from: v362 } = txn7;
  ;
  ;
  const v371 = stdlib.addressEq(v357, v362);
  stdlib.assert(v371, {
    at: './index.rsh:98:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  const txn8 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 7,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v374, time: v373, didSend: v191, from: v372 } = txn8;
  ;
  const v377 = stdlib.addressEq(v357, v372);
  stdlib.assert(v377, {
    at: './index.rsh:100:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Oracle_setPullDetails(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_setPullDetails expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_setPullDetails expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Oracle_setPullDetails4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Oracle_verifyNftSubmitted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_verifyNftSubmitted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_verifyNftSubmitted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Oracle_verifyNftSubmitted3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Oracle_setPullDetails(address,uint64,uint64,uint64)byte[0]`, `Oracle_verifyNftSubmitted()byte`],
    pure: [],
    sigs: [`Oracle_setPullDetails(address,uint64,uint64,uint64)byte[0]`, `Oracle_verifyNftSubmitted()byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAPAAEEICgIBwUCBjADoI0GqvzUhwY4JgIBAAAiNQAxGEEE9ClkSSJbNQEhBVs1AjYaABdJQQAuIjUEIzUGSSENDEAAFiENEkQ2GgE2GgJQNhoDUDYaBFBCAcOBycOQLhJEKUICSzYaAhc1BDYaAzYaARdJJAxAAilJIQkMQAEsSSEGDEAAsiEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf0hDls1/FdAIDX7gATiG7OpsDT8iARuNPsxABJEsSKyATQDIQpbshIkshA0/7IUNP2yEbOxIrIBNPyyCCOyEDT/sgezsSKyASOyEiSyEDT7shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCA49IIQk0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEEWzX9IQpbNfwhDls1+1dAIDX6gARhtKwMsDT8NP2IA9A0+jEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lAoSwFXAGBnSCEGNQEyBjUCQgM4SSEHDEAAakghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf2BUFs1/IFYWzX7gATMmZJcsDEANANXMCASRDT/NP4WUDT9FlA0/BZQNPsWUDEAUChLAVcAYGdIIQk1ATIGNQJCAsdIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf4hBFs1/Uk1BTX8gAR6rDAENPxQsDT8VwAgNfs0/CVbNfo0/CEKWzX5MQA0/xJEgAgAAAAAAAABWbApNQc0/zT+FlA0/RZQNPtQNPoWUDT5FlAoSwFXAGBnSCEHNQEyBjUCQgJCSSEIDEAA+kkhCwxAAHBIIQs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+IQRbNf1JNQU1/IAEyJoPuzT8ULAxADT/EkSACAAAAAAAAAEtNANXMAFQsDQDVzABNQc0/zT+FlA0/RZQKEsBVwAwZ0gkNQEyBjUCQgHESCEINAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEEWzX9VzAiNfyABEGxQE2wNPxXABE1+yM0/ogB7jQDV1IgMQASRDT8NPtJIlsjCBZcAFwAVwARIlsjEkk1+kQ0/zT+FlA0/RZQgAEBUChLAVcAMWdIIQs1ATIGNQJCAUFJIwxAAF5IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yVbNf4hBFs1/VdQIjX8gASai5F0sDEANANXMCASRDT/NP4WUDT9FlA0/FAxAFAoSwFXAHJnSCEINQEyBjUCQgDdSCEMiAEpIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/yEFWzX+VxAgNf1XMCA1/IAEgv/EpjT/FlA0/hZQNP1QNPxQsIERr0k1+0lQSTX6SVcAESEFr1wAXABJNflJVxERIQWvXABcETX4NP40/xNEIQyIALuxIrIBIrISJLIQMgqyFDT/shGzIQyIAKOxIrIBIrISJLIQMgqyFDT+shGzMQA0/xZQNP4WUDT8UDT4UChLAVcAcmdIIzUBMgY1AkIAHDEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 114,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"}],"internalType":"struct T4","name":"v559","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v301","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v345","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v548","type":"address"},{"internalType":"uint256","name":"v549","type":"uint256"},{"internalType":"uint256","name":"v550","type":"uint256"},{"internalType":"uint256","name":"v551","type":"uint256"}],"name":"Oracle_setPullDetails","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Oracle_verifyNftSubmitted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v561","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v563","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v565","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v567","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v569","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v571","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"v573","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b036080601f6200268e38819003918201851683019184831184841017620004c75780849260a09460405283398101031262000617576040516200004c816200061c565b815181526200005e6020830162000654565b6020820152620000716040830162000654565b60408201526200009960806200008a6060850162000654565b93606084019485520162000654565b608082015243600355620000ac62000669565b50604051916080830183811085821117620004c757604052620000ce62000669565b835260208301620000de6200068a565b81526040840191620000ef6200068a565b8352620000fb6200068a565b606086015260ff60045416620005fe576040805133815285516020808301919091528601516001600160a01b03908116828401529186015182166060820152915181166080808401919091528501511660a08201527faca64684293a37de5e46300ddefb4c9fd401acc7567f2db768bec3d83c3233799060c090a182518015908115620005f1575b5015620005d857600084515260006020855101526000604085510152835181515283516020825101525180519160406020840151930151151560405193620001cb8562000638565b6000855260208501526040840152620001e36200068a565b92839260005b6002811062000594575050825252602081015160406020820151910151151560405191620002178362000638565b60008352602083015260408201526200022f6200068a565b9160005b60028110620005445750506020820152606083015260018060a01b0360408201511660018060a01b03602083015116146000146200053c5760005b156200052357346200050a576040519062000289826200061c565b6000825260006020830152604082019260008452606080840191600083526080850193620002b66200068a565b8552338087526020828101516001600160a01b0390811698820198895260408085015182168b52608094850151821688529590940151875260016000818155438255865192830193909352975184169481019490945296518216606084015292511691810191909152905191929091908360a084015b60028310620004dd57505050506101408152610160810181811084821117620004c7576040528051928311620004c7576002548281811c91168015620004bc575b6020821014620004a657601f811162000439575b50602090601f8411600114620003d05783945090839291600094620003c4575b50501b916000199060031b1c1916176002555b604051611f949081620006fa8239f35b015192503880620003a1565b919383169160026000528360206000209360005b878282106200041f5750501062000405575b505050811b01600255620003b4565b015160001960f88460031b161c19169055388080620003f6565b8486015187559095019460209485019487935001620003e4565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c810191602086106200049b575b601f0160051c019083905b8281106200048e57505062000381565b600081550183906200047e565b909150819062000473565b634e487b7160e01b600052602260045260246000fd5b90607f16906200036d565b634e487b7160e01b600052604160045260246000fd5b6060602091604086518051835284810151858401520151151560408201520193019101909184906200032c565b60405163100960cb60e01b8152600a6004820152602490fd5b60405163100960cb60e01b815260096004820152602490fd5b60016200026e565b620005508183620006d1565b516200055d8286620006d1565b526200056a8185620006d1565b5060001981146200057e5760010162000233565b634e487b7160e01b600052601160045260246000fd5b9091929350620005a58183620006d1565b51620005b28287620006d1565b52620005bf8186620006d1565b5060001981146200057e576001019084939291620001e9565b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000183565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60a081019081106001600160401b03821117620004c757604052565b606081019081106001600160401b03821117620004c757604052565b51906001600160a01b03821682036200061757565b60405190620006788262000638565b60006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620004c75781528260005b828110620006b957505050565b602090620006c662000669565b8184015201620006ac565b906002811015620006e35760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146101085780632e01b349146100ff5780632e928421146100f65780632f132302146100ed57806330dd5d08146100e45780635109f9ae146100db578063573b8510146100d257806383230757146100c9578063889345b8146100c0578063ab53f2c6146100b7578063f47590d3146100ae5763f5a239bc0361000e576100a96109c5565b61000e565b506100a96108f2565b506100a9610863565b506100a9610819565b506100a96107fa565b506100a96106bf565b506100a9610662565b506100a961051d565b506100a96103bb565b506100a96101c0565b506100a961012c565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b5060a036600319011261012757610141610d8e565b6040519061014e82610c04565b600435825260803660231901126101275761019f9160405161016f81610c2c565b60243561017b816108e1565b8152604435602082015260643560408201526084356060820152602082015261168f565b60405160008152602090f35b0390f35b602090600319011261012757600490565b5061019f61039c6103aa6101e66101d6366101af565b6101de610d8e565b50369061188f565b6102016101fc6101f860045460ff1690565b1590565b611153565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd604051806102318433836118cb565b0390a1610242600660005414611173565b61027161025f610250610cd6565b60208082518301019101611dd3565b915180159081156103af575b50611193565b61027b34156111b3565b61033361032a6040830192608061029285516108d5565b916102ac6102a7606083019485519033611b7f565b6111d3565b60a08101926102cd3360018060a01b036102c687516108d5565b16146111f3565b61031761030e6102db61165d565b986102ef6102e986516108d5565b8b610dd2565b6103086102ff60208701516108d5565b60208c01610dd2565b516108d5565b60408901610dd2565b51606087015201516080850152516108d5565b60a08301610dd2565b61033d6007600055565b61034643600155565b6040519283916020830191909160a060c082019381600180821b03918281511685528260208201511660208601528260408201511660408601526060810151606086015260808101516080860152015116910152565b03601f198101835282610cb3565b610eba565b9050600154143861026b565b506103c86101d6366101af565b6103df6103da6101f860045460ff1690565b611213565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4016040518061040f8433836118cb565b0390a16104e76000916104256007845414611233565b610445610433610250610cd6565b91518015908115610511575b50611253565b6080810161045581513414611273565b6104e06104d9602060a08501948780808060018060a01b03986104858b8b61047e3392516108d5565b1614611293565b6104ae61049560408801516108d5565b61049f88516108d5565b908c60608a0151921690611f29565b6104c06104bb87516108d5565b6108d5565b905190828215610508575bf1156104fb575b01516108d5565b92516108d5565b1690611ecc565b80556104f36000600155565b61019f611e54565b610503611e47565b6104d2565b506108fc6104cb565b9050600154143861043f565b5061019f61039c6103aa6105336101d6366101af565b61054a6105456101f860045460ff1690565b6112b3565b7f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c12496040518061057a8433836118cb565b0390a161058b6005600054146112d3565b6105ba6105a8610599610cd6565b60208082518301019101611d5f565b91518015908115610656575b506112f3565b6105c43415611313565b6105de6105d76104bb60608401516108d5565b3314611331565b60a06105e861165d565b916105fc6105f682516108d5565b84610dd2565b61061561060c60208301516108d5565b60208501610dd2565b61062e61062560408301516108d5565b60408501610dd2565b608081015160608401520151608082015261064c3360a08301610dd2565b61033d6006600055565b905060015414386105b4565b506000806003193601126106bc5760406020916106b0610680610d8e565b809284519061068e82610c47565b80825285519161069d83610c04565b8783019180835283525115159052610f9d565b01511515604051908152f35b80fd5b5061019f61039c6103aa6106d56101d6366101af565b6106ec6106e76101f860045460ff1690565b611351565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040518061071c8433836118cb565b0390a161072d600160005414611371565b61075c61074a61073b610cd6565b60208082518301019101611962565b915180159081156107ee575b50611391565b61076634156113b1565b6107806107796104bb60608401516108d5565b33146113d1565b608061078a611a09565b916107986105f682516108d5565b6107a861060c60208301516108d5565b6107b861062560408301516108d5565b015160608201526107cc3360808301610dd2565b6107d66002600055565b6107df43600155565b60405192839160208301611a59565b90506001541438610756565b5034610127576000366003190112610127576020600154604051908152f35b50604036600319011261012757610858610831610d8e565b60405161083d81610c04565b600435815260243561084e81610df4565b6020820152610f9d565b602060405160008152f35b5034610127576000806003193601126106bc578054610880610cd6565b906040519283918252602090604082840152835191826040850152815b8381106108be57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161089d565b6001600160a01b031690565b6001600160a01b0381160361012757565b506080366003190112610127576101ab6109b36020600435610913816108e1565b6109ac61091e610d8e565b8092610928610dad565b60018060a01b038092168152858101602435815260408201906044358252606083019260643584526040519461095d86610c47565b610965610dad565b918287525116905251878451015251604083510152516060825101526040519061098e82610c04565b600082528582019061099e610dad565b82526000835251905261168f565b0151151590565b60405190151581529081906020820190565b506109d26101d6366101af565b610b9d6109dd610de1565b6109f46109ef6101f860045460ff1690565b6113f1565b6103aa6040937f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a855180610a298433836118cb565b0390a1610a3a600260005414611411565b610b41610b3986610a49610cd6565b93610a73610a61602096878082518301019101611aed565b91518015908115610ba7575b50611431565b610a7d3415611451565b610b15610b1086830198610aa5610aa0610a978c516108d5565b30903390611c4e565b611471565b610ac43360018060a01b03610abd60808801516108d5565b1614611491565b610b0a6001610b036060870151805190610afe8d85845101938c82820151910151151591610af0610d81565b95865285015215158b840152565b611cfb565b5151148252565b51151590565b6114b1565b6104d2610b31610b23610dad565b986103086102e985516108d5565b868901610dd2565b868501610dd2565b60016060840152610b526003600055565b610b5b43600155565b61039c85519384928301919091606080608083019460018060a01b03808251168552806020830151166020860152604082015116604085015201511515910152565b5160008152602090f35b90506001541438610a6d565b90600182811c92168015610be3575b6020831014610bcd57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610bc2565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610c1f57604052565b610c27610bed565b604052565b608081019081106001600160401b03821117610c1f57604052565b602081019081106001600160401b03821117610c1f57604052565b606081019081106001600160401b03821117610c1f57604052565b60c081019081106001600160401b03821117610c1f57604052565b60a081019081106001600160401b03821117610c1f57604052565b601f909101601f19168101906001600160401b03821190821017610c1f57604052565b6040519060008260025491610cea83610bb3565b808352600193808516908115610d605750600114610d12575b50610d1092500383610cb3565b565b60026000908152600080516020611f6883398151915294602093509091905b818310610d48575050610d10935082010138610d03565b85548884018501529485019487945091830191610d31565b9050610d1094506020925060ff191682840152151560051b82010138610d03565b60405190610d1082610c62565b60405190610d9b82610c62565b60006040838281528260208201520152565b60405190610dba82610c2c565b60006060838281528260208201528260408201520152565b6001600160a01b039091169052565b60405190610dee82610c47565b60008252565b8015150361012757565b9081608091031261012757606060405191610e1883610c2c565b8051610e23816108e1565b83526020810151610e33816108e1565b60208401526040810151610e46816108e1565b60408401520151610e5681610df4565b606082015290565b818110610e69575050565b60008155600101610e5e565b90601f8211610e82575050565b610d109160026000526020600020906020601f840160051c83019310610eb0575b601f0160051c0190610e5e565b9091508190610ea3565b80519091906001600160401b038111610f90575b610ee281610edd600254610bb3565b610e75565b602080601f8311600114610f1e5750819293600092610f13575b50508160011b916000199060031b1c191617600255565b015190503880610efc565b6002600052601f19831694909190600080516020611f68833981519152926000905b878210610f78575050836001959610610f5f575b505050811b01600255565b015160001960f88460031b161c19169055388080610f54565b80600185968294968601518155019501930190610f40565b610f98610bed565b610ece565b6103aa61039c91610d1093610fbf610fba6101f860045460ff1690565b6114d1565b60408051338152835160208083019190915284015115158183015290916110bb917f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c690606090a16110146003600054146114f1565b611043611031611022610cd6565b60208082518301019101610dfe565b94518015908115611147575b50611511565b61104d3415611531565b61106461105d6104bb86516108d5565b3314611551565b826110b4606086017f86f6e1e49399bd54fcf857bd8e1fafac7457dcffaf9c050adad8252e3b9ae6e26110ab61109a8351151590565b855190151581529081906020820190565b0390a151151590565b1515910152565b6110ff6110f7826110ca610d8e565b946110de6110d882516108d5565b87610dd2565b6104d26110ee60208301516108d5565b60208801610dd2565b828401610dd2565b6111096004600055565b61111243600155565b5192839160208301919091604060608201938160018060a01b0391828151168552826020820151166020860152015116910152565b9050600154143861103d565b1561115a57565b60405163100960cb60e01b815260266004820152602490fd5b1561117a57565b60405163100960cb60e01b815260276004820152602490fd5b1561119a57565b60405163100960cb60e01b815260286004820152602490fd5b156111ba57565b60405163100960cb60e01b815260296004820152602490fd5b156111da57565b60405163100960cb60e01b8152602a6004820152602490fd5b156111fa57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561121a57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561123a57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561125a57565b60405163100960cb60e01b8152602e6004820152602490fd5b1561127a57565b60405163100960cb60e01b8152602f6004820152602490fd5b1561129a57565b60405163100960cb60e01b815260306004820152602490fd5b156112ba57565b60405163100960cb60e01b815260216004820152602490fd5b156112da57565b60405163100960cb60e01b815260226004820152602490fd5b156112fa57565b60405163100960cb60e01b815260236004820152602490fd5b1561131a57565b602460405163100960cb60e01b8152816004820152fd5b1561133857565b60405163100960cb60e01b815260256004820152602490fd5b1561135857565b60405163100960cb60e01b8152600b6004820152602490fd5b1561137857565b60405163100960cb60e01b8152600c6004820152602490fd5b1561139857565b60405163100960cb60e01b8152600d6004820152602490fd5b156113b857565b60405163100960cb60e01b8152600e6004820152602490fd5b156113d857565b60405163100960cb60e01b8152600f6004820152602490fd5b156113f857565b60405163100960cb60e01b815260106004820152602490fd5b1561141857565b60405163100960cb60e01b815260116004820152602490fd5b1561143857565b60405163100960cb60e01b815260126004820152602490fd5b1561145857565b60405163100960cb60e01b815260136004820152602490fd5b1561147857565b60405163100960cb60e01b815260146004820152602490fd5b1561149857565b60405163100960cb60e01b815260156004820152602490fd5b156114b857565b60405163100960cb60e01b815260166004820152602490fd5b156114d857565b60405163100960cb60e01b815260176004820152602490fd5b156114f857565b60405163100960cb60e01b815260186004820152602490fd5b1561151857565b60405163100960cb60e01b815260196004820152602490fd5b1561153857565b60405163100960cb60e01b8152601a6004820152602490fd5b1561155857565b60405163100960cb60e01b8152601b6004820152602490fd5b1561157857565b60405163100960cb60e01b8152601c6004820152602490fd5b1561159857565b60405163100960cb60e01b8152601d6004820152602490fd5b156115b857565b60405163100960cb60e01b8152601e6004820152602490fd5b156115d857565b60405163100960cb60e01b8152601f6004820152602490fd5b156115f857565b60405163100960cb60e01b815260206004820152602490fd5b9081606091031261012757604080519161162a83610c62565b8051611635816108e1565b83526020810151611645816108e1565b60208401520151611655816108e1565b604082015290565b6040519061166a82610c7d565b8160a06000918281528260208201528260408201528260608201528260808201520152565b906103aa61174b6060610d10946116b36116ae6101f860045460ff1690565b611571565b6040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152928101516080830152919091015160a08201527fcf75c3f92bc0b0ef41eb2b7fc8787cafd919576596c6944885843774b4c9d7999060c090a161172c600460005414611591565b611734610cd6565b906000602080958482808097518301019101611611565b9761176184518015908115611883575b506115b1565b61176b34156115d1565b61178261177b6104bb8b516108d5565b33146115f1565b604051600081527f93d62f347ccd035f8801347eec0bcb863109562876eb27c10466e9edffc3980d90602090a101526117ef6117e660406117c161165d565b986117cf6102e982516108d5565b6104d26117de878301516108d5565b878c01610dd2565b60408801610dd2565b01805151611808906001600160a01b0316838701610dd2565b8281510151608086015251015160a08401526118246005600055565b61182d43600155565b61039c604051938492830191909160a08060c0830194600180831b038082511685528060208301511660208601528060408301511660408601526060820151166060850152608081015160808501520151910152565b9050600154143861175b565b919082602091031261012757604051602081016001600160401b038111828210176118be575b60405291358252565b6118c6610bed565b6118b5565b6001600160a01b0390911681529051602082015260400190565b9080601f830112156101275760409182519261190084610c04565b839260c083019281841161012757935b83851061191f57505050505090565b60608583031261012757825160609161193782610c62565b8651825260209182880151838201528588015161195381610df4565b86820152815201940193611910565b9061014082820312610127576119cd9060806040519361198185610c98565b805161198c816108e1565b8552602081015161199c816108e1565b602086015260408101516119af816108e1565b604086015260608101516119c2816108e1565b6060860152016118e5565b608082015290565b6040908151916119e483610c04565b8260005b8281106119f457505050565b6020906119ff610d8e565b81840152016119e8565b6040519060a082016001600160401b03811183821017611a4c575b6040526000608083828152826020820152826040820152611a436119d5565b60608201520152565b611a54610bed565b611a24565b81516001600160a01b03908116825260208084015182168184015260408085015190921682840152606080850151610140850196959392916000918187015b60028410611ac5575050506080909301516001600160a01b03166101209094019390935250610d10915050565b8483600192888551805183528481015185840152015115158982015201920193019290611a98565b610140818303126101275761012090611b4860405193611b0c85610c98565b8251611b17816108e1565b85526020830151611b27816108e1565b60208601526040830151611b3a816108e1565b6040860152606083016118e5565b606084015201516119cd816108e1565b906002811015611b695760051b0190565b634e487b7160e01b600052603260045260246000fd5b600091611be99383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152611bc281610c98565b5193165af1611bd9611bd2611bec565b8092611c9b565b5060208082518301019101611c39565b90565b3d15611c34573d906001600160401b038211611c27575b60405191611c1b601f8201601f191660200184610cb3565b82523d6000602084013e565b611c2f610bed565b611c03565b606090565b908160209103126101275751611be981610df4565b6040516323b872dd60e01b602082019081526001600160a01b039384166024830152938316604482015260016064808301919091528152611be993600093849392849190611bc281610c98565b15611ca35790565b805115611cb257805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b15611cd35790565b805115611ce257805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b9190611d056119d5565b926000805b60028110611d19575050508252565b611d238184611b58565b51611d2e8288611b58565b52611d398187611b58565b506000198114611d4b57600101611d0a565b634e487b7160e01b82526011600452602482fd5b908160c09103126101275760a060405191611d7983610c7d565b8051611d84816108e1565b83526020810151611d94816108e1565b60208401526040810151611da7816108e1565b60408401526060810151611dba816108e1565b606084015260808101516080840152015160a082015290565b908160c09103126101275760a060405191611ded83610c7d565b8051611df8816108e1565b83526020810151611e08816108e1565b60208401526040810151611e1b816108e1565b604084015260608101516060840152608081015160808401520151611e3f816108e1565b60a082015290565b506040513d6000823e3d90fd5b611e5f600254610bb3565b80611e675750565b601f8111600114611e7a57506000600255565b6002600052611ebf90601f0160051c600080516020611f68833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610e5e565b6000602081208160025555565b60008091611f22938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526001604482015260448152611f0b81610c2c565b5193165af1611bd9611f1b611bec565b8092611ccb565b1561012757565b60009190611f2293838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152611f0b81610c2c56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 9870,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:51:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:58:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:63:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:73:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:87:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:95:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:99:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:107:3:after expr stmt',
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
  "Deployer": Deployer,
  "Oracle_setPullDetails": Oracle_setPullDetails,
  "Oracle_verifyNftSubmitted": Oracle_verifyNftSubmitted,
  "Puller": Puller,
  "Submitter": Submitter
  };
export const _APIs = {
  Oracle: {
    setPullDetails: Oracle_setPullDetails,
    verifyNftSubmitted: Oracle_verifyNftSubmitted
    }
  };
