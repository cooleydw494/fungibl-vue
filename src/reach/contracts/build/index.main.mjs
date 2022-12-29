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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4],
      2: [ctc4, ctc5, ctc5, ctc4, ctc3],
      3: [ctc4, ctc5, ctc5, ctc3, ctc4],
      4: [ctc4, ctc5, ctc5, ctc1],
      5: [ctc4, ctc5, ctc5],
      6: [ctc4, ctc5, ctc5, ctc4, ctc0, ctc0],
      7: [ctc4, ctc5, ctc5, ctc0, ctc0, ctc4],
      8: [ctc4, ctc5, ctc5, ctc0, ctc0, ctc4]
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
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v260 = [v259, v259];
  const v264 = stdlib.protect(ctc0, interact.funToken, 'for Deployer\'s interact field funToken');
  const v265 = stdlib.protect(ctc1, interact.fungiblAddress, 'for Deployer\'s interact field fungiblAddress');
  const v266 = stdlib.protect(ctc0, interact.nftAssetId, 'for Deployer\'s interact field nftAssetId');
  const v267 = stdlib.protect(ctc1, interact.submitterAddress, 'for Deployer\'s interact field submitterAddress');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v270, time: v269, didSend: v26, from: v268 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v270, time: v269, didSend: v26, from: v268 } = txn1;
  ;
  const v273 = stdlib.tokenEq(v264, v266);
  const v274 = v273 ? false : true;
  stdlib.assert(v274, {
    at: './index.rsh:37:11:application',
    fs: ['at ./index.rsh:34:16:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v260, v268, v266, v264, v265, v267],
    evt_cnt: 4,
    funcNum: 1,
    lct: v269,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v276, v277, v278, v279], secs: v281, time: v280, didSend: v43, from: v275 } = txn2;
      
      const v282 = v260[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0')];
      const v283 = stdlib.Array_set(v282, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
      const v284 = stdlib.Array_set(v260, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'), v283);
      const v286 = v284[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1')];
      const v287 = stdlib.Array_set(v286, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
      const v288 = stdlib.Array_set(v284, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1'), v287);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v276
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v277
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc1, ctc0, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v276, v277, v278, v279], secs: v281, time: v280, didSend: v43, from: v275 } = txn2;
  const v282 = v260[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0')];
  const v283 = stdlib.Array_set(v282, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
  const v284 = stdlib.Array_set(v260, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'), v283);
  const v286 = v284[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1')];
  const v287 = stdlib.Array_set(v286, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
  const v288 = stdlib.Array_set(v284, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1'), v287);
  const v290 = stdlib.tokenEq(v277, v276);
  const v291 = v290 ? false : true;
  stdlib.assert(v291, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const v292 = stdlib.addressEq(v268, v275);
  stdlib.assert(v292, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'sender correct',
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
  const {data: [], secs: v300, time: v299, didSend: v54, from: v298 } = txn3;
  ;
  const v301 = stdlib.addressEq(v298, v279);
  stdlib.assert(v301, {
    at: './index.rsh:52:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Deployer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v305, time: v304, didSend: v66, from: v303 } = txn4;
  ;
  const v306 = v288[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
  const v307 = v306[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
  const v308 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:56:19:decimal', stdlib.UInt_max, '1'));
  const v310 = stdlib.Array_set(v306, '0', v308);
  const v311 = stdlib.Array_set(v288, stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0'), v310);
  ;
  const v312 = stdlib.addressEq(v298, v303);
  stdlib.assert(v312, {
    at: './index.rsh:56:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
  const v314 = v313[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
  const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('./index.rsh:57:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v315, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v324], secs: v326, time: v325, didSend: v99, from: v323 } = txn5;
  undefined /* setApiDetails */;
  ;
  const v327 = stdlib.addressEq(v323, v268);
  stdlib.assert(v327, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Deployer'
    });
  await txn5.getOutput('Oracle_verifyNftIsSubmitted', 'v315', ctc3, v315);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v351], secs: v353, time: v352, didSend: v157, from: v350 } = txn6;
  undefined /* setApiDetails */;
  ;
  const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v355 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v358 = stdlib.addressEq(v350, v268);
  stdlib.assert(v358, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Deployer'
    });
  const v359 = null;
  await txn6.getOutput('Oracle_setPullDetails', 'v359', ctc6, v359);
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v373, time: v372, didSend: v180, from: v371 } = txn7;
  ;
  const v374 = stdlib.addressEq(v371, v354);
  stdlib.assert(v374, {
    at: './index.rsh:89:10:application',
    fs: [],
    msg: 'Invalid Puller',
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
  const {data: [], secs: v378, time: v377, didSend: v192, from: v376 } = txn8;
  ;
  ;
  const v385 = stdlib.addressEq(v371, v376);
  stdlib.assert(v385, {
    at: './index.rsh:93:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn9 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 8,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v388, time: v387, didSend: v199, from: v386 } = txn9;
  ;
  const v391 = stdlib.addressEq(v371, v386);
  stdlib.assert(v391, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function _Oracle_setPullDetails5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_setPullDetails5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_setPullDetails5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v268, v276, v277] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1]);
  const v335 = ctc.selfAddress();
  const v337 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:73:3:application',
    fs: ['at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:73:3:function exp)'],
    msg: 'in',
    who: 'Oracle_setPullDetails'
    });
  const v348 = stdlib.addressEq(v335, v268);
  stdlib.assert(v348, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:76:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:74:97:function exp)', 'at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:73:3:function exp)'],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_setPullDetails'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v268, v276, v277, v337],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v351], secs: v353, time: v352, didSend: v157, from: v350 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Oracle_setPullDetails"
        });
      ;
      const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
      const v355 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
      const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
      const v359 = null;
      const v360 = await txn1.getOutput('Oracle_setPullDetails', 'v359', ctc4, v359);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v351], secs: v353, time: v352, didSend: v157, from: v350 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v355 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v358 = stdlib.addressEq(v350, v268);
  stdlib.assert(v358, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_setPullDetails'
    });
  const v359 = null;
  const v360 = await txn1.getOutput('Oracle_setPullDetails', 'v359', ctc4, v359);
  stdlib.protect(ctc4, await interact.out(v351, v360), {
    at: './index.rsh:73:3:application',
    fs: ['at ./index.rsh:73:3:application call to [unknown function] (defined at: ./index.rsh:73:3:function exp)', 'at ./index.rsh:81:16:application call to "returnNothing" (defined at: ./index.rsh:73:3:function exp)'],
    msg: 'out',
    who: 'Oracle_setPullDetails'
    });
  
  return;
  
  
  
  };
export async function _Oracle_verifyNftIsSubmitted4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_verifyNftIsSubmitted4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_verifyNftIsSubmitted4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v268, v276, v277, v315] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2]);
  const v317 = ctc.selfAddress();
  const v319 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:62:3:application',
    fs: ['at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:3:function exp)'],
    msg: 'in',
    who: 'Oracle_verifyNftIsSubmitted'
    });
  const v321 = stdlib.addressEq(v317, v268);
  stdlib.assert(v321, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:82:function exp)', 'at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:3:function exp)'],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_verifyNftIsSubmitted'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v268, v276, v277, v315, v319],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v324], secs: v326, time: v325, didSend: v99, from: v323 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Oracle_verifyNftIsSubmitted"
        });
      ;
      const v331 = await txn1.getOutput('Oracle_verifyNftIsSubmitted', 'v315', ctc2, v315);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v324], secs: v326, time: v325, didSend: v99, from: v323 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v327 = stdlib.addressEq(v323, v268);
  stdlib.assert(v327, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Oracle_verifyNftIsSubmitted'
    });
  const v331 = await txn1.getOutput('Oracle_verifyNftIsSubmitted', 'v315', ctc2, v315);
  stdlib.protect(ctc4, await interact.out(v324, v331), {
    at: './index.rsh:62:3:application',
    fs: ['at ./index.rsh:62:3:application call to [unknown function] (defined at: ./index.rsh:62:3:function exp)', 'at ./index.rsh:67:23:application call to "returnIsNftSubmitted" (defined at: ./index.rsh:62:3:function exp)'],
    msg: 'out',
    who: 'Oracle_verifyNftIsSubmitted'
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
  
  
  const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v260 = [v259, v259];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v270, time: v269, didSend: v26, from: v268 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v276, v277, v278, v279], secs: v281, time: v280, didSend: v43, from: v275 } = txn2;
  const v282 = v260[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0')];
  const v283 = stdlib.Array_set(v282, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
  const v284 = stdlib.Array_set(v260, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'), v283);
  const v286 = v284[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1')];
  const v287 = stdlib.Array_set(v286, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
  const v288 = stdlib.Array_set(v284, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1'), v287);
  const v290 = stdlib.tokenEq(v277, v276);
  const v291 = v290 ? false : true;
  stdlib.assert(v291, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Puller'
    });
  ;
  ;
  ;
  const v292 = stdlib.addressEq(v268, v275);
  stdlib.assert(v292, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'sender correct',
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
  const {data: [], secs: v300, time: v299, didSend: v54, from: v298 } = txn3;
  ;
  const v301 = stdlib.addressEq(v298, v279);
  stdlib.assert(v301, {
    at: './index.rsh:52:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Puller'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v305, time: v304, didSend: v66, from: v303 } = txn4;
  ;
  const v306 = v288[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
  const v307 = v306[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
  const v308 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:56:19:decimal', stdlib.UInt_max, '1'));
  const v310 = stdlib.Array_set(v306, '0', v308);
  const v311 = stdlib.Array_set(v288, stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0'), v310);
  ;
  const v312 = stdlib.addressEq(v298, v303);
  stdlib.assert(v312, {
    at: './index.rsh:56:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
  const v314 = v313[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
  const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('./index.rsh:57:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v315, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: null,
    who: 'Puller'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v324], secs: v326, time: v325, didSend: v99, from: v323 } = txn5;
  undefined /* setApiDetails */;
  ;
  const v327 = stdlib.addressEq(v323, v268);
  stdlib.assert(v327, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Puller'
    });
  await txn5.getOutput('Oracle_verifyNftIsSubmitted', 'v315', ctc3, v315);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v351], secs: v353, time: v352, didSend: v157, from: v350 } = txn6;
  undefined /* setApiDetails */;
  ;
  const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v355 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v358 = stdlib.addressEq(v350, v268);
  stdlib.assert(v358, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Puller'
    });
  const v359 = null;
  await txn6.getOutput('Oracle_setPullDetails', 'v359', ctc6, v359);
  const v368 = ctc.selfAddress();
  const v370 = stdlib.addressEq(v368, v354);
  stdlib.assert(v370, {
    at: './index.rsh:86:11:application',
    fs: ['at ./index.rsh:85:14:application call to [unknown function] (defined at: ./index.rsh:85:18:function exp)'],
    msg: null,
    who: 'Puller'
    });
  
  const txn7 = await (ctc.sendrecv({
    args: [v268, v276, v277, v354, v355, v357],
    evt_cnt: 0,
    funcNum: 6,
    lct: v352,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v373, time: v372, didSend: v180, from: v371 } = txn7;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v373, time: v372, didSend: v180, from: v371 } = txn7;
  ;
  const v374 = stdlib.addressEq(v371, v354);
  stdlib.assert(v374, {
    at: './index.rsh:89:10:application',
    fs: [],
    msg: 'Invalid Puller',
    who: 'Puller'
    });
  stdlib.protect(ctc6, await interact.sendingTokenToContract(), {
    at: './index.rsh:92:41:application',
    fs: ['at ./index.rsh:92:41:application call to [unknown function] (defined at: ./index.rsh:92:41:function exp)', 'at ./index.rsh:92:41:application call to "liftedInteract" (defined at: ./index.rsh:92:41:application)'],
    msg: 'sendingTokenToContract',
    who: 'Puller'
    });
  
  const txn8 = await (ctc.sendrecv({
    args: [v268, v276, v277, v355, v357, v371],
    evt_cnt: 0,
    funcNum: 7,
    lct: v372,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:10:dot', stdlib.UInt_max, '0'), [[v355, v277]]],
    sim_p: (async (txn8) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v378, time: v377, didSend: v192, from: v376 } = txn8;
      
      ;
      sim_r.txns.push({
        amt: v355,
        kind: 'to',
        tok: v277
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc4, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v378, time: v377, didSend: v192, from: v376 } = txn8;
  ;
  ;
  const v385 = stdlib.addressEq(v371, v376);
  stdlib.assert(v385, {
    at: './index.rsh:93:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  const txn9 = await (ctc.sendrecv({
    args: [v268, v276, v277, v355, v357, v371],
    evt_cnt: 0,
    funcNum: 8,
    lct: v377,
    onlyIf: true,
    out_tys: [],
    pay: [v357, []],
    sim_p: (async (txn9) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v388, time: v387, didSend: v199, from: v386 } = txn9;
      
      sim_r.txns.push({
        amt: v357,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v268,
        tok: v277
        });
      sim_r.txns.push({
        kind: 'from',
        to: v268,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v371,
        tok: v276
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v277
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v276
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
  const {data: [], secs: v388, time: v387, didSend: v199, from: v386 } = txn9;
  ;
  const v391 = stdlib.addressEq(v371, v386);
  stdlib.assert(v391, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Puller'
    });
  ;
  ;
  stdlib.protect(ctc6, await interact.transferringNftToPuller(), {
    at: './index.rsh:100:42:application',
    fs: ['at ./index.rsh:100:42:application call to [unknown function] (defined at: ./index.rsh:100:42:function exp)', 'at ./index.rsh:100:42:application call to "liftedInteract" (defined at: ./index.rsh:100:42:application)'],
    msg: 'transferringNftToPuller',
    who: 'Puller'
    });
  
  ;
  stdlib.protect(ctc6, await interact.pullSuccess(v276), {
    at: './index.rsh:104:30:application',
    fs: ['at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:104:30:application call to "liftedInteract" (defined at: ./index.rsh:104:30:application)'],
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
  
  
  const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v260 = [v259, v259];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v270, time: v269, didSend: v26, from: v268 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v276, v277, v278, v279], secs: v281, time: v280, didSend: v43, from: v275 } = txn2;
  const v282 = v260[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0')];
  const v283 = stdlib.Array_set(v282, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
  const v284 = stdlib.Array_set(v260, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'), v283);
  const v286 = v284[stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1')];
  const v287 = stdlib.Array_set(v286, '0', stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '0'));
  const v288 = stdlib.Array_set(v284, stdlib.checkedBigNumberify('./index.rsh:43:12:dot', stdlib.UInt_max, '1'), v287);
  const v290 = stdlib.tokenEq(v277, v276);
  const v291 = v290 ? false : true;
  stdlib.assert(v291, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Submitter'
    });
  ;
  ;
  ;
  const v292 = stdlib.addressEq(v268, v275);
  stdlib.assert(v292, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  const v295 = ctc.selfAddress();
  const v297 = stdlib.addressEq(v295, v279);
  stdlib.assert(v297, {
    at: './index.rsh:49:11:application',
    fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
    msg: null,
    who: 'Submitter'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v268, v276, v277, v279, v288],
    evt_cnt: 0,
    funcNum: 2,
    lct: v280,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v300, time: v299, didSend: v54, from: v298 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v300, time: v299, didSend: v54, from: v298 } = txn3;
  ;
  const v301 = stdlib.addressEq(v298, v279);
  stdlib.assert(v301, {
    at: './index.rsh:52:10:application',
    fs: [],
    msg: 'Invalid Submitter (must match Account specified by Fungibl back-end',
    who: 'Submitter'
    });
  stdlib.protect(ctc2, await interact.signingTransfer(), {
    at: './index.rsh:55:37:application',
    fs: ['at ./index.rsh:55:37:application call to [unknown function] (defined at: ./index.rsh:55:37:function exp)', 'at ./index.rsh:55:37:application call to "liftedInteract" (defined at: ./index.rsh:55:37:application)'],
    msg: 'signingTransfer',
    who: 'Submitter'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v268, v276, v277, v288, v298],
    evt_cnt: 0,
    funcNum: 3,
    lct: v299,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:56:19:decimal', stdlib.UInt_max, '1'), v276]]],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v305, time: v304, didSend: v66, from: v303 } = txn4;
      
      ;
      const v306 = v288[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
      const v307 = v306[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
      const v308 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:56:19:decimal', stdlib.UInt_max, '1'));
      const v310 = stdlib.Array_set(v306, '0', v308);
      const v311 = stdlib.Array_set(v288, stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0'), v310);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:56:19:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v276
        });
      const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
      const v314 = v313[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
      const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('./index.rsh:57:34:decimal', stdlib.UInt_max, '1'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc8, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v305, time: v304, didSend: v66, from: v303 } = txn4;
  ;
  const v306 = v288[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
  const v307 = v306[stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0')];
  const v308 = stdlib.add(v307, stdlib.checkedBigNumberify('./index.rsh:56:19:decimal', stdlib.UInt_max, '1'));
  const v310 = stdlib.Array_set(v306, '0', v308);
  const v311 = stdlib.Array_set(v288, stdlib.checkedBigNumberify('./index.rsh:56:13:dot', stdlib.UInt_max, '0'), v310);
  ;
  const v312 = stdlib.addressEq(v298, v303);
  stdlib.assert(v312, {
    at: './index.rsh:56:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
  const v314 = v313[stdlib.checkedBigNumberify('./index.rsh:57:18:application', stdlib.UInt_max, '0')];
  const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('./index.rsh:57:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v315, {
    at: './index.rsh:57:10:application',
    fs: [],
    msg: null,
    who: 'Submitter'
    });
  stdlib.protect(ctc2, await interact.submitSuccess(v276), {
    at: './index.rsh:59:35:application',
    fs: ['at ./index.rsh:59:35:application call to [unknown function] (defined at: ./index.rsh:59:35:function exp)', 'at ./index.rsh:59:35:application call to "liftedInteract" (defined at: ./index.rsh:59:35:application)'],
    msg: 'submitSuccess',
    who: 'Submitter'
    });
  
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v324], secs: v326, time: v325, didSend: v99, from: v323 } = txn5;
  undefined /* setApiDetails */;
  ;
  const v327 = stdlib.addressEq(v323, v268);
  stdlib.assert(v327, {
    at: './index.rsh:65:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Submitter'
    });
  await txn5.getOutput('Oracle_verifyNftIsSubmitted', 'v315', ctc4, v315);
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v351], secs: v353, time: v352, didSend: v157, from: v350 } = txn6;
  undefined /* setApiDetails */;
  ;
  const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '0')];
  const v355 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '1')];
  const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:73:10:array', stdlib.UInt_max, '3')];
  const v358 = stdlib.addressEq(v350, v268);
  stdlib.assert(v358, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: 'Invalid Oracle (must be Deployer)',
    who: 'Submitter'
    });
  const v359 = null;
  await txn6.getOutput('Oracle_setPullDetails', 'v359', ctc2, v359);
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v373, time: v372, didSend: v180, from: v371 } = txn7;
  ;
  const v374 = stdlib.addressEq(v371, v354);
  stdlib.assert(v374, {
    at: './index.rsh:89:10:application',
    fs: [],
    msg: 'Invalid Puller',
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
  const {data: [], secs: v378, time: v377, didSend: v192, from: v376 } = txn8;
  ;
  ;
  const v385 = stdlib.addressEq(v371, v376);
  stdlib.assert(v385, {
    at: './index.rsh:93:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Submitter'
    });
  const txn9 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 8,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v388, time: v387, didSend: v199, from: v386 } = txn9;
  ;
  const v391 = stdlib.addressEq(v371, v386);
  stdlib.assert(v391, {
    at: './index.rsh:95:10:dot',
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
  if (step == 5) {return _Oracle_setPullDetails5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Oracle_verifyNftIsSubmitted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_verifyNftIsSubmitted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_verifyNftIsSubmitted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Oracle_verifyNftIsSubmitted4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Oracle_setPullDetails(address,uint64,uint64,uint64)byte[0]`, `Oracle_verifyNftIsSubmitted()byte`],
    pure: [],
    sigs: [`Oracle_setPullDetails(address,uint64,uint64,uint64)byte[0]`, `Oracle_verifyNftIsSubmitted()byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAPAAEECCAoBQIGBzADoI0GqvzUhwY4JgIBAAAiNQAxGEEFRClkSSJbNQElWzUCNhoAF0lBAC8iNQQjNQZJIQ0MQAAWIQ0SRDYaATYaAlA2GgNQNhoEUEIByoH80tKbAhJEKUICRjYaAhc1BDYaAzYaARdJJAxAAqNJIQgMQAGcSSEJDEABKkklDEAAsSUSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hBVs1/SEOWzX8V0AgNfuABBf82y6wNPyIBLk0+zEAEkSxIrIBNAMhCluyEiSyEDT/shQ0/bIRs7EisgE0/LIII7IQNP+yB7OxIrIBI7ISJLIQNPuyFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ID2kghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBFs1/iEFWzX9IQpbNfwhDls1+1dAIDX6gATiG7OpsDT8NP2IBBo0+jEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+lAoSwFXAGBnSCU1ATIGNQJCA4NIIQg0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hBVs1/YFQWzX8gVhbNfuABGG0rAywMQA0A1cwIBJENP80/hZQNP0WUDT8FlA0+xZQMQBQKEsBVwBgZ0ghCTUBMgY1AkIDGEkhBgxAAIhIIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/iEFWzX9STUFNfyABF+5EVM0/FCwNPxXACA1+zT8IQRbNfo0/CEKWzX5MQA0/xJEgAgAAAAAAAABZ7ApNQc0/zT+FlA0/RZQNPtQNPoWUDT5FlAoSwFXAGBnSCEINQEyBjUCQgKJSCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/iEFWzX9STUFNfyABNTgGC00/FCwMQA0/xJEgAgAAAAAAAABOzQDVzABULA0A1cwATUHNP80/hZQNP0WUChLAVcAMGdIIQY1ATIGNQJCAhhJIQcMQADqSSELDEAAg0ghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQVbNf1XMCI1/IAEp2XEtLA0/FcAETX7IzT+iAIzNANXUiAxABJENPw0+0kiWyMIFlwAXABXABEiWyMSSTX6RDT/NP4WUDT9FlCAAQFQKEsBVwAxZ0gkNQEyBjUCQgGHSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf4hBVs1/VdQIjX8gARBsUBNsDEANANXMCASRDT/NP4WUDT9FlA0/FAxAFAoSwFXAHJnSCELNQEyBjUCQgEnSSMMQADHSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACI1/1ciIDX+STUFSUoiWzX9JVs1/FcQIDX7VzAgNfqABGlbjwU0/RZQNPwWUDT7UDT6ULA0/0lXABElr1wAXABJNflJVxERJa9cAFwRNfg0/DT9E0QhDIgBALEisgEishIkshAyCrIUNP2yEbMhDIgA6LEisgEishIkshAyCrIUNPyyEbM0/jEAEkQ0/jT9FlA0/BZQNPpQNPhQKEsBVwByZ0ghBzUBMgY1AkIAWkghDIgApiI0ARJENARJIhJMNAISEUSABF8Nq/qwgRGvSTX/SVA1/jT+MQBQKEsBVwBCZ0gjNQEyBjUCQgAcMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEHMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v589","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v315","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v359","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v578","type":"address"},{"internalType":"uint256","name":"v579","type":"uint256"},{"internalType":"uint256","name":"v580","type":"uint256"},{"internalType":"uint256","name":"v581","type":"uint256"}],"name":"Oracle_setPullDetails","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Oracle_verifyNftIsSubmitted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"address payable","name":"elem4","type":"address"}],"internalType":"struct T8","name":"v591","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v593","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v595","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v597","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v599","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v601","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v603","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v605","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200285d90813803601f1980601f83011683019360018060401b0392848610848711176200036457808592604097885283396020948591810103126200037a57845190848201828110858211176200036457865251815243600355620000666200039b565b50845162000074816200037f565b6200007e6200039b565b8152848101946200008e620003cb565b865260049260ff8454166200034d577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87888051338152835185820152a151801590811562000340575b5015620003295760009182815152828282510152828882510152805187515251818751015234620003125786519262000110846200037f565b6200011a620003cb565b8452818401968388525180945233875260019687845543885588519483860189858c88935b60028510620002e75750505050505060018060a01b0390511660e085015260e08452610100840184811087821117620002d45788528351958611620002c157600254908782811c92168015620002b6575b83831014620002a35750601f811162000257575b508093601f8611600114620001ef57505091839491849394620001e3575b50501b916000199060031b1c1916176002555b516124579081620004068239f35b015192503880620001c2565b600283528183209493928692918316915b888383106200023c575050501062000222575b505050811b01600255620001d5565b015160001960f88460031b161c1916905538808062000213565b85870151885590960195948501948793509081019062000200565b60028352818320601f870160051c81019183881062000298575b601f0160051c019087905b8281106200028c575050620001a4565b8481550187906200027c565b909150819062000271565b634e487b7160e01b845260229052602483fd5b91607f169162000190565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b816060928751805184528581015186850152015115159082015201930191019091858c8c926200013f565b865163100960cb60e01b8152600981850152602490fd5b865163100960cb60e01b8152600881850152602490fd5b90506001541438620000d7565b875163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200036457604052565b60405190606082016001600160401b03811183821017620003645760405260006040838281528260208201520152565b604090815191620003dc836200037f565b8260005b828110620003ed57505050565b602090620003fa6200039b565b8184015201620003e056fe60806040526004361015610018575b361561001657005b005b60003560e01c806306a723031461011c5780631e93b0f1146101135780632e9284211461010a5780632f1323021461010157806341712c0a146100f857806374c2f3e4146100ef57806383230757146100e6578063a73401da146100dd578063ab53f2c6146100d4578063c4e9c3f1146100cb578063d3efbd9f146100c2578063f47590d3146100b95763f5a239bc0361000e576100b4610d72565b61000e565b506100b4610c9f565b506100b4610bf5565b506100b4610943565b506100b46108c0565b506100b4610863565b506100b4610844565b506100b46107fa565b506100b461060c565b506100b46104a6565b506100b46102ef565b506100b46102d0565b506100b461013b565b602090600319011261013657600490565b600080fd5b5061015861014836610125565b610150611088565b503690611ef2565b61017361016e61016a60045460ff1690565b1590565b61144d565b7f90a060bb9517819ff9fcae31809040edc14dc784a4ce151b7d5b20fea1b5cc6b604051806101a3843383611f2e565b0390a161028a6000916101b9600884541461146d565b6101e86101d66101c7610fd0565b60208082518301019101612296565b915180159081156102c4575b5061148d565b608081016101f8815134146114ad565b61028361027c602060a08501948780808060018060a01b03986102288b8b610221339251610c82565b16146114cd565b6102516102386040880151610c82565b6102428851610c82565b908c60608a01519216906123ec565b61026361025e8751610c82565b610c82565b9051908282156102bb575bf1156102ae575b0151610c82565b9251610c82565b169061238f565b80556102966000600155565b61029e612317565b60405160008152602090f35b0390f35b6102b661230a565b610275565b506108fc61026e565b905060015414386101e2565b5034610136576000366003190112610136576020600354604051908152f35b5061029e61048761049561030561014836610125565b61031c61031761016a60045460ff1690565b6114ed565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd6040518061034c843383611f2e565b0390a161035d60066000541461150d565b61038c61037a61036b610fd0565b60208082518301019101612222565b9151801590811561049a575b5061152d565b610396341561154d565b6103b06103a961025e6060840151610c82565b331461156d565b60a06103ba611a17565b916103ce6103c88251610c82565b846110cc565b6103e76103de6020830151610c82565b602085016110cc565b6104006103f76040830151610c82565b604085016110cc565b608081015160608401520151608082015261041e3360a083016110cc565b6104286007600055565b61043143600155565b6040519283916020830191909160a060c082019381600180821b03918281511685528260208201511660208601528260408201511660408601526060810151606086015260808101516080860152015116910152565b03601f198101835282610fad565b6111b4565b90506001541438610386565b5061029e6104876104956104bc61014836610125565b6104d36104ce61016a60045460ff1690565b61158d565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d40160405180610503843383611f2e565b0390a16105146007600054146115ad565b6105346105226101c7610fd0565b91518015908115610600575b506115cd565b61053e34156115ed565b6105f66105ed604083019260806105558551610c82565b9161056f61056a6060830194855190336120a6565b61160d565b60a08101926105903360018060a01b036105898751610c82565b161461162d565b6105da6105d161059e611a17565b986105b26105ac8651610c82565b8b6110cc565b6105cb6105c26020870151610c82565b60208c016110cc565b51610c82565b604089016110cc565b5160608701520151608085015251610c82565b60a083016110cc565b6104286008600055565b9050600154143861052e565b5061061961014836610125565b6107e46106246110db565b61063b61063661016a60045460ff1690565b61164d565b6104956040937fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e8515855180610670843383611f2e565b0390a161068160036000541461166d565b61078861078086610690610fd0565b936106ba6106a860209687808251830101910161203b565b915180159081156107ee575b5061168d565b6106c434156116ad565b61075c610757868301986106ec6106e76106de8c51610c82565b30903390612175565b6116cd565b61070b3360018060a01b036107046080880151610c82565b16146116ed565b610751600161074a60608701518051906107458d85845101938c8282015191015115159161073761107b565b95865285015215158b840152565b611e3b565b5151148252565b51151590565b61170d565b61027561077861076a6110a7565b986105cb6105ac8551610c82565b8689016110cc565b8685016110cc565b600160608401526107996004600055565b6107a243600155565b61048785519384928301919091606080608083019460018060a01b03808251168552806020830151166020860152604082015116604085015201511515910152565b5160008152602090f35b905060015414386106b4565b50604036600319011261013657610839610812611088565b60405161081e81610efe565b600435815260243561082f816110ee565b6020820152611297565b602060405160008152f35b5034610136576000366003190112610136576020600154604051908152f35b506000806003193601126108bd5760406020916108b1610881611088565b809284519061088f82610f26565b80825285519161089e83610efe565b8783019180835283525115159052611297565b01511515604051908152f35b80fd5b5034610136576000806003193601126108bd5780546108dd610fd0565b906040519283918252602090604082840152835191826040850152815b83811061091b57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016108fa565b60a090600319011261013657600490565b5060a03660031901126101365761095936610932565b610961611088565b5060a081360312610136576107e4610b9861049560409384610bb7610bae825161098a81610f41565b843581526105cb610ba66020966105cb610b9e898301356109aa81610c8e565b8a87019081526105cb60808b860135956109c387610c8e565b8c8a0196875260608101356109d781610c8e565b60608b01520135976109e889610c8e565b608081019889528c610b2d6109fb611c7d565b9d8e610a14610a0f61016a60045460ff1690565b61172d565b7f6299d4970d3f709c75fdcc068638a5a3d7cddf54fd2c9d63c149c7ff56d7e7c0825180610a898833839060a090939293608060c0840195600180851b038093168552805160208601528260208201511660408601528260408201511660608601528260608201511682860152015116910152565b0390a1610a9a60016000541461174d565b610ac8610ab6610aa8610fd0565b868082518301019101611d21565b95518015908115610be9575b5061176d565b610af8855180519061074585888401519301511515610ae561107b565b9360008552898501528684019015159052565b809152610b2884820151928086850151940151151590610b1661107b565b94600086528786015284019015159052565b611e9f565b9c019b8c52610b878d610b408851610c82565b92610b4e61025e8751610c82565b6001600160a01b0394851603610bdf57610b68600061178d565b610b7234156117ad565b01913390610b808451610c82565b16146117cd565b610b8f611d80565b9e8f9151610c82565b906110cc565b898c016110cc565b8a89016110cc565b606086016110cc565b516080840152610bc76002600055565b610bd043600155565b61048785519384928301611df1565b610b68600161178d565b90506001541438610ac2565b5060a036600319011261013657610c0b36610932565b610c13611088565b81360360a0811261013657608060405191610c2d83610efe565b84358352601f1901126101365761029e92608060405191610c4d83610f5c565b6020810135610c5b81610c8e565b83526040810135602084015260608101356040840152013560608201526020820152611a49565b6001600160a01b031690565b6001600160a01b0381160361013657565b506080366003190112610136576102aa610d606020600435610cc081610c8e565b610d59610ccb611088565b8092610cd56110a7565b60018060a01b0380921681528581016024358152604082019060443582526060830192606435845260405194610d0a86610f26565b610d126110a7565b9182875251169052518784510152516040835101525160608251015260405190610d3b82610efe565b6000825285820190610d4b6110a7565b825260008352519052611a49565b0151151590565b60405190151581529081906020820190565b5061029e610487610495610d8861014836610125565b610d9f610d9a61016a60045460ff1690565b6117ed565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a60405180610dcf843383611f2e565b0390a1610de060026000541461180d565b610e0f610dfd610dee610fd0565b60208082518301019101611f48565b91518015908115610ea1575b5061182d565b610e19341561184d565b610e33610e2c61025e6060840151610c82565b331461186d565b6080610e3d611fbb565b91610e4b6103c88251610c82565b610e5b6103de6020830151610c82565b610e6b6103f76040830151610c82565b01516060820152610e7f33608083016110cc565b610e896003600055565b610e9243600155565b60405192839160208301611fed565b90506001541438610e09565b90600182811c92168015610edd575b6020831014610ec757565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ebc565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f1957604052565b610f21610ee7565b604052565b602081019081106001600160401b03821117610f1957604052565b60a081019081106001600160401b03821117610f1957604052565b608081019081106001600160401b03821117610f1957604052565b606081019081106001600160401b03821117610f1957604052565b60c081019081106001600160401b03821117610f1957604052565b601f909101601f19168101906001600160401b03821190821017610f1957604052565b6040519060008260025491610fe483610ead565b80835260019380851690811561105a575060011461100c575b5061100a92500383610fad565b565b6002600090815260008051602061242b83398151915294602093509091905b81831061104257505061100a935082010138610ffd565b8554888401850152948501948794509183019161102b565b905061100a94506020925060ff191682840152151560051b82010138610ffd565b6040519061100a82610f77565b6040519061109582610f77565b60006040838281528260208201520152565b604051906110b482610f5c565b60006060838281528260208201528260408201520152565b6001600160a01b039091169052565b604051906110e882610f26565b60008252565b8015150361013657565b908160809103126101365760606040519161111283610f5c565b805161111d81610c8e565b8352602081015161112d81610c8e565b6020840152604081015161114081610c8e565b60408401520151611150816110ee565b606082015290565b818110611163575050565b60008155600101611158565b90601f821161117c575050565b61100a9160026000526020600020906020601f840160051c830193106111aa575b601f0160051c0190611158565b909150819061119d565b80519091906001600160401b03811161128a575b6111dc816111d7600254610ead565b61116f565b602080601f8311600114611218575081929360009261120d575b50508160011b916000199060031b1c191617600255565b0151905038806111f6565b6002600052601f1983169490919060008051602061242b833981519152926000905b878210611272575050836001959610611259575b505050811b01600255565b015160001960f88460031b161c1916905538808061124e565b8060018596829496860151815501950193019061123a565b611292610ee7565b6111c8565b6104956104879161100a936112b96112b461016a60045460ff1690565b61188d565b60408051338152835160208083019190915284015115158183015290916113b5917faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072290606090a161130e6004600054146118ad565b61133d61132b61131c610fd0565b602080825183010191016110f8565b94518015908115611441575b506118cd565b61134734156118ed565b61135e61135761025e8651610c82565b331461190d565b826113ae606086017fafb937f1501620e04a9dbb25c26f3f8c1e5cc63a201f73e42a3ceb19e16b5ac56113a56113948351151590565b855190151581529081906020820190565b0390a151151590565b1515910152565b6113f96113f1826113c4611088565b946113d86113d28251610c82565b876110cc565b6102756113e86020830151610c82565b602088016110cc565b8284016110cc565b6114036005600055565b61140c43600155565b5192839160208301919091604060608201938160018060a01b0391828151168552826020820151166020860152015116910152565b90506001541438611337565b1561145457565b60405163100960cb60e01b815260316004820152602490fd5b1561147457565b60405163100960cb60e01b815260326004820152602490fd5b1561149457565b60405163100960cb60e01b815260336004820152602490fd5b156114b457565b60405163100960cb60e01b815260346004820152602490fd5b156114d457565b60405163100960cb60e01b815260356004820152602490fd5b156114f457565b60405163100960cb60e01b815260266004820152602490fd5b1561151457565b60405163100960cb60e01b815260276004820152602490fd5b1561153457565b60405163100960cb60e01b815260286004820152602490fd5b1561155457565b60405163100960cb60e01b815260296004820152602490fd5b1561157457565b60405163100960cb60e01b8152602a6004820152602490fd5b1561159457565b60405163100960cb60e01b8152602b6004820152602490fd5b156115b457565b60405163100960cb60e01b8152602c6004820152602490fd5b156115d457565b60405163100960cb60e01b8152602d6004820152602490fd5b156115f457565b60405163100960cb60e01b8152602e6004820152602490fd5b1561161457565b60405163100960cb60e01b8152602f6004820152602490fd5b1561163457565b60405163100960cb60e01b815260306004820152602490fd5b1561165457565b60405163100960cb60e01b815260156004820152602490fd5b1561167457565b60405163100960cb60e01b815260166004820152602490fd5b1561169457565b60405163100960cb60e01b815260176004820152602490fd5b156116b457565b60405163100960cb60e01b815260186004820152602490fd5b156116d457565b60405163100960cb60e01b815260196004820152602490fd5b156116f457565b60405163100960cb60e01b8152601a6004820152602490fd5b1561171457565b60405163100960cb60e01b8152601b6004820152602490fd5b1561173457565b60405163100960cb60e01b8152600a6004820152602490fd5b1561175457565b60405163100960cb60e01b8152600b6004820152602490fd5b1561177457565b60405163100960cb60e01b8152600c6004820152602490fd5b1561179457565b60405163100960cb60e01b8152600d6004820152602490fd5b156117b457565b60405163100960cb60e01b8152600e6004820152602490fd5b156117d457565b60405163100960cb60e01b8152600f6004820152602490fd5b156117f457565b60405163100960cb60e01b815260106004820152602490fd5b1561181457565b60405163100960cb60e01b815260116004820152602490fd5b1561183457565b60405163100960cb60e01b815260126004820152602490fd5b1561185457565b60405163100960cb60e01b815260136004820152602490fd5b1561187457565b60405163100960cb60e01b815260146004820152602490fd5b1561189457565b60405163100960cb60e01b8152601c6004820152602490fd5b156118b457565b60405163100960cb60e01b8152601d6004820152602490fd5b156118d457565b60405163100960cb60e01b8152601e6004820152602490fd5b156118f457565b60405163100960cb60e01b8152601f6004820152602490fd5b1561191457565b60405163100960cb60e01b815260206004820152602490fd5b1561193457565b60405163100960cb60e01b815260216004820152602490fd5b1561195457565b60405163100960cb60e01b815260226004820152602490fd5b1561197457565b60405163100960cb60e01b815260236004820152602490fd5b1561199457565b602460405163100960cb60e01b8152816004820152fd5b156119b257565b60405163100960cb60e01b815260256004820152602490fd5b908160609103126101365760408051916119e483610f77565b80516119ef81610c8e565b835260208101516119ff81610c8e565b60208401520151611a0f81610c8e565b604082015290565b60405190611a2482610f92565b8160a06000918281528260208201528260408201528260608201528260808201520152565b90610495611b05606061100a94611a6d611a6861016a60045460ff1690565b61192d565b6040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152928101516080830152919091015160a08201527ff72d347137eaf8408cba5250f3077de60c03a06a7850de92f626820e37311d909060c090a1611ae660056000541461194d565b611aee610fd0565b9060006020809584828080975183010191016119cb565b97611b1b84518015908115611c3d575b5061196d565b611b25341561198d565b611b3c611b3561025e8b51610c82565b33146119ab565b604051600081527fe59667db7631b2d5a73f99be472267efcc00786c0688e4cf7019bb2562051f1490602090a10152611ba9611ba06040611b7b611a17565b98611b896105ac8251610c82565b610275611b9887830151610c82565b878c016110cc565b604088016110cc565b01805151611bc2906001600160a01b03168387016110cc565b8281510151608086015251015160a0840152611bde6006600055565b611be743600155565b610487604051938492830191909160a08060c0830194600180831b038082511685528060208301511660208601528060408301511660408601526060820151166060850152608081015160808501520151910152565b90506001541438611b15565b604090815191611c5883610efe565b8260005b828110611c6857505050565b602090611c73611088565b8184015201611c5c565b60405190611c8a82610efe565b81611c93611c49565b81526020611c9f611c49565b910152565b9080601f8301121561013657604091825192611cbf84610efe565b839260c083019281841161013657935b838510611cde57505050505090565b606085830312610136578251606091611cf682610f77565b86518252602091828801518382015285880151611d12816110ee565b86820152815201940193611ccf565b60e0818303126101365760c090611d4460405193611d3e85610efe565b82611ca4565b83520151611d5181610c8e565b602082015290565b906002811015611d6a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b60405190611d8d82610f41565b81600081526000602082015260006040820152600060608201526080611c9f611c49565b6000915b60028310611dc257505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611db5565b61100a9092919260808061014083019560018060a01b0380825116855280602083015116602086015280604083015116604086015260608201511660608501520151910190611db1565b9190611e45611c49565b926000805b60028110611e59575050508252565b611e638184611d59565b51611e6e8288611d59565b52611e798187611d59565b506000198114611e8b57600101611e4a565b634e487b7160e01b82526011600452602482fd5b9190611ea9611c49565b926000805b60028110611ec0575050506020830152565b611eca8184611d59565b51611ed58288611d59565b52611ee08187611d59565b506000198114611e8b57600101611eae565b919082602091031261013657604051602081016001600160401b03811182821017611f21575b60405291358252565b611f29610ee7565b611f18565b6001600160a01b0390911681529051602082015260400190565b906101408282031261013657611fb390608060405193611f6785610f41565b8051611f7281610c8e565b85526020810151611f8281610c8e565b60208601526040810151611f9581610c8e565b60408601526060810151611fa881610c8e565b606086015201611ca4565b608082015290565b60405190611fc882610f41565b6000608083828152826020820152826040820152611fe4611c49565b60608201520152565b919091610120610140820193608060018060a01b039182815116855282602082015116602086015282604082015116604086015261203360608201516060870190611db1565b015116910152565b6101408183031261013657610120906120966040519361205a85610f41565b825161206581610c8e565b8552602083015161207581610c8e565b6020860152604083015161208881610c8e565b604086015260608301611ca4565b60608401520151611fb381610c8e565b6000916121109383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526120e981610f41565b5193165af16121006120f9612113565b80926121c2565b5060208082518301019101612160565b90565b3d1561215b573d906001600160401b03821161214e575b60405191612142601f8201601f191660200184610fad565b82523d6000602084013e565b612156610ee7565b61212a565b606090565b908160209103126101365751612110816110ee565b6040516323b872dd60e01b602082019081526001600160a01b039384166024830152938316604482015260016064808301919091528152612110936000938493928491906120e981610f41565b156121ca5790565b8051156121d957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156121fa5790565b80511561220957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b908160c09103126101365760a06040519161223c83610f92565b805161224781610c8e565b8352602081015161225781610c8e565b6020840152604081015161226a81610c8e565b6040840152606081015161227d81610c8e565b606084015260808101516080840152015160a082015290565b908160c09103126101365760a0604051916122b083610f92565b80516122bb81610c8e565b835260208101516122cb81610c8e565b602084015260408101516122de81610c8e565b60408401526060810151606084015260808101516080840152015161230281610c8e565b60a082015290565b506040513d6000823e3d90fd5b612322600254610ead565b8061232a5750565b601f811160011461233d57506000600255565b600260005261238290601f0160051c60008051602061242b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611158565b6000602081208160025555565b600080916123e5938260405191602083019263a9059cbb60e01b845260018060a01b03809216602482015260016044820152604481526123ce81610f5c565b5193165af16121006123de612113565b80926121f2565b1561013657565b600091906123e593838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526123ce81610f5c56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 10333,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:46:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:53:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:58:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:68:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:82:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:94:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:102:3:after expr stmt',
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
  "Oracle_verifyNftIsSubmitted": Oracle_verifyNftIsSubmitted,
  "Puller": Puller,
  "Submitter": Submitter
  };
export const _APIs = {
  Oracle: {
    setPullDetails: Oracle_setPullDetails,
    verifyNftIsSubmitted: Oracle_verifyNftIsSubmitted
    }
  };
