/*
Copyright (C) 2021  wyuinche

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
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