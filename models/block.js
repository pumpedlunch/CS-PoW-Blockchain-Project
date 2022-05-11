const secp = require("@noble/secp256k1");

class Block {
    constructor() {
        this.number;
        this.transactions = [];
        this.timestamp = Date.now()/1000;
        this.previousHash = '';
        this.targetDifficulty;
        this.version;
        this.nonce;
    }
    async toHash() {
        let _hash = await secp.utils.sha256(this.transactions + this.timestamp + this.previousHash + this.nonce);
        return `0x${secp.utils.bytesToHex(_hash)}`;
    }
}

module.exports = Block;