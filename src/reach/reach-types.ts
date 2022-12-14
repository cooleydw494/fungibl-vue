import { Stdlib_User as StdLibUser } from "@reach-sh/stdlib/interfaces";
import {providers} from "@reach-sh/stdlib/dist/types/cfxers";
import Provider = providers.Provider;
import {ProviderEnv, ProviderName, Token, ContractInfo, Address, NetworkAccount, Ty, Backend, Account} from "@reach-sh/stdlib/dist/types/ALGO";

/** Reach StdLib instance */
export type BigNumber = any;

/** A reach-connected Network Account representation */
export type ReachAccount = {
  networkAccount: { addr?: string; address?: string; [x: string]: any };
  /** @deprecated - Use `reachAccount.contract(backend)` instead */
  attach(backend: any, contractInfo: any | Promise<any>): ReachContract;
  /** @deprecated - Use `reachAccount.contract(backend)` instead */
  deploy(backend: any | Promise<any>): ReachContract;
  contract(backend: any, contractInfo?: any): ReachContract;
  getAddress(): string;
  setDebugLabel(label: string): ReachAccount;
  tokenAccept(tokenId: string | number): Promise<void>;
  tokenMetadata(tokenId: string | number): Promise<{ [x: string]: any }>;
};

/** Reach Contract `Participant` member */
type RCParticipant = {
  [participantName: string]: (interact: any) => Promise<any>;
};
/** Reach Contract `View` member */
type RCView = { [viewName: string]: { [viewProp: string]: RCFn } };
/** Reach Contract `API` member */
type RCApi = { [apiName: string]: { [apiMethod: string]: RCFn } };

type RCFn = {
  (...args: any[]): Promise<any>;
};

export type ReachContract = {
  getInfo(): Promise<any>;
  getContractAddress(): Promise<string | number>;
  /** Reach Contract `API` member */
  a: RCApi;
  /** Reach Contract `API` member */
  apis: RCApi;
  /** Reach Contract `Participant` member */
  p: RCParticipant;
  /** Reach Contract `Participant` member */
  participants: RCParticipant;
  /** Reach Contract `View` member */
  v: RCView;
  /** Reach Contract `View` member */
  views: RCView;
  /** @deprecated Get contract `Views`. Use `ctc.views` or `ctc.v` */
  getViews(): RCView;
};

/** `NetworkData` describes single network data-item (for e.g. Ethereum) */
export type NetworkData = {
  name: string;
  abbr: string;
  active?: boolean;
  decimals?: number;
};
