import CoinKey from 'coinkey'
import pkg from 'bech32';
const { bech32 } = pkg;

const wallet = new CoinKey.createRandom();

console.log("SAVE BUT DO NOT SHARE THIS:", wallet.privateKey.toString('hex'));
console.log("Address:", wallet.publicAddress);

