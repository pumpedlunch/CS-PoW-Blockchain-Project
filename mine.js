const Block = require("./models/Block.js");
const db = require("./db.js");

const MAX_TX = 5; // move to DB
const VERSION = "Integrity v1";

let mining = false;
function startMining() {
    mining = true;
    mine();
}
function stopMining() {
    mining = false;
}

async function mine() {

    //create new block
    const block = new Block;
    block.number = db.blockchain.blockHeight();
    block.targetDifficulty = db.blockchain.difficulty;
    block.version = VERSION;
    //add txs
    block.transactions.push('coinbase');
    for (let i = 0; db.mempool.length > 0 && block.transactions.length < MAX_TX; i++) {
        block.transactions.push(db.mempool[i]);
    }
    //set previousHash
    block.previousHash = await db.blockchain.chain[db.blockchain.blockHeight() - 1].toHash();

    let hash;
    do {
        //initiate or increment nonce
        block.nonce = block.nonce + 1 || 0;
        //hash block
        hash = await block.toHash();
    } while (BigInt(hash) > BigInt(db.blockchain.difficulty));

    console.log('Block Found! => ', block);

    //add block to blockchain
    await db.blockchain.addBlock(block);

    //remove txs from mempool
    block.transactions.forEach((tx) => {
        let i = db.mempool.indexOf(tx);
        if (i >= 0) db.mempool.splice(i, 1);
    })

    //
    setTimeout(() => {
        if (!mining) return;
        else mine();
    }, 100);
}

module.exports = { startMining, stopMining };