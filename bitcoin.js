import CoinKey from 'coinkey'


const wallet = new CoinKey.createRandom();

console.log("SAVE BUT DO NOT SHARE THIS:", wallet.privateKey.toString('hex'));
console.log("Address:", wallet.publicAddress);

