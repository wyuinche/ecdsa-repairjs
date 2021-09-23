const ethers = require('ethers');

const restorePublicKey = (msgHash, signature) => {

    let hash = msgHash.toString('hex');
    let sig = signature.toString('hex');

    if(hash.indexOf('0x') < 0) {
        hash = "0x" + hash;
    }
    if(sig.indexOf('0x') < 0) {
        sig = "0x" + sig;
    }

    const _publicKey = ethers.utils.recoverPublicKey(hash, sig);

    return _publicKey.slice(2, _publicKey.length);
};

module.exports = {
    restorePublicKey
}