const keccak256 = require('keccak256');

const hashMessage = (msg) => {
    return keccak256("\x19Ethereum Signed Message:\n" + msg.length + msg);
}

module.exports = {
    hashMessage
}