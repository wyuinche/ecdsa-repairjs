/* 
Copyright (C) 2021 ChainSafe Systems

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/af83f335b6cb4b7cb08ec35a723d31e8'));
const ec = new require('elliptic').ec('secp256k1');

class Keypair {

    constructor(privKey) {
        this.privKey = privKey;
        this.generatePublicKey();  
    }

    getPrivateKey() {
        return this.privKey;
    }

    getPublicKey() {
        return this.pubKey;
    }
    
    sign(msg) {
        const signedMsg = this.account.sign(msg);
        return signedMsg.signature;
    }

    generatePublicKey() {
        this.account = web3.eth.accounts.privateKeyToAccount("0x" + this.privKey);
        this.pubKey = ec.keyFromPrivate(this.privKey).getPublic().encode('hex');
    }
};

const newKeypair = () => {
    return new Keypair(ec.genKeyPair().getPrivate('hex'));
};

module.exports = {
    Keypair,
    newKeypair
}
