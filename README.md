# ether-restorejs

This project supports to generate ethereum keypair, sign message, and restore public key with hashed-message and its signature.

## Installation

This project is developed with,

* node v16.10.0
* npm v7.24.0

and using,

* elliptic v6.5.4
* ethers v5.4.7
* keccak256 v1.0.3
* web3 v1.5.3

```sh
>>> ~$ git clone https://github.com/wyuinche/ether-restorejs.git

>>> ~$ cd ether-restorejs

>>> ~/ether-restorejs$ npm install -g
added 1 package, and audited 3 packages in 852ms
```

Then use 'npm link ether-restorejs' command in your project folder.

```sh
>>> ~/{your project}$ npm link ether-restorejs
added 1 package, and audited 386 packages in 2s
```

## Generate New Ethereum Keypair

'ether-restorejs' supports to generate new ethereum keypair containing a private/public key set.

```js
>>> const etherRestorejs = require('ether-restorejs');

>>> const keypair = etherRestorejs.newKeypair();

>>> keypair.getPrivateKey();
369ba45936f36fdcae428f67ff89a9f82816d4828c36cdb7d34f5904a3bbf941

>>. keypair.getPublicKey();
04804ef73721632e7e65e5f53136137dc6406a792fef07eba1d18715f280ed9bb3a3549ed7ce32332be7225c06c0beea104023b009407c3418f895113fd79abfc7
```

## Hash Message

'ether-restorejs' supports to hash string message for ethereum.

```js
>>> const etherRestorejs = require('ether-restorejs');

>>> const msg = 'sample text';

>>> const hashedMsg = etherRestorejs.hashMessage(msg); // <Buffer 65 c9 aa 04 1b fe 8b 21 b4 d5 63 57 74 14 c3 64 50 29 fa 30 bd 40 a7 80 1f 49 05 be c5 72 14 69>

>>> hashedMsg.toString('hex');
65c9aa041bfe8b21b4d563577414c3645029fa30bd40a7801f4905bec5721469
```

## Sign Message

You can sign message for ethereum with you keypairs.

```js
/* keypair: keypair generated in 'Generate New Ethereum Keypair'
 */
>>> const signature = keypair.sign('sample text'); 
```

## Restore Ethereum Public Key

'ether-restorejs' supports to restore ethereum public key by a pair of hashed message and its signature.

```js
>>> const etherRestorejs = require('ether-restorejs');

>>> const keypair = etherRestorejs.newKeypair();
>>> const msg = "sample text";

>>> const hashedMsg = etherRestorejs.hashMessage(msg);
>>> const signature = keypair.sign(msg);

>>> const publicKey = etherRestorejs.restorePublicKey(hashedMsg, signature);

>>> keypair.getPublicKey() == publicKey;
true
```