import { Stdlib_User } from "@reach-sh/stdlib/interfaces";
import {providers} from "@reach-sh/stdlib/dist/types/cfxers";
import Provider = providers.Provider;
import {ProviderEnv, ProviderName, Token, ContractInfo, Address, NetworkAccount, Ty, Backend, Account} from "@reach-sh/stdlib/dist/types/ALGO";

/** Reach StdLib instance */
type BigNumber = any;

/** A reach-connected Network Account representation */
export type ReachAccount = {
  networkAccount: { addr?: string; address?: string; [x: string]: any };
  getAddress(): string;
  setDebugLabel(label: string): ReachAccount;
  tokenAccept(tokenId: string | number): Promise<void>;
  tokenMetadata(): Promise<{ [x: string]: any }>;
};

/** `NetworkData` describes single network data-item (for e.g. Ethereum) */
export type NetworkData = {
  name: string;
  abbr: string;
  active?: boolean;
  decimals?: number;
};
