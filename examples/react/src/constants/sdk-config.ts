import { BLOCKCHAIN_NAME, Configuration } from 'rubic-sdk';

export const configuration: Configuration = {
  rpcProviders: {
    [BLOCKCHAIN_NAME.AVALANCHE]: {
      rpcList: ['https://rpc.ankr.com/avalanche_fuji']
    },
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
      rpcList: ['https://bsc-dataseed.binance.org/']
    },
    [BLOCKCHAIN_NAME.POLYGON]: {
      rpcList: ['https://polygon-rpc.com']
    },
    [BLOCKCHAIN_NAME.FANTOM]: {
      rpcList: ['https://rpc.ftm.tools']
    },
  }
}