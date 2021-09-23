const hashMessage = require('./src/hash').hashMessage;
const Keypair = require('./src/keypair').Keypair;
const newKeypair = require('./src/keypair').newKeypair;
const restorePublicKey = require('./src/restore').restorePublicKey;

module.exports = {
    hashMessage,
    Keypair,
    newKeypair,
    restorePublicKey
};