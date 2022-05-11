const Blockchain = require("./models/Blockchain.js");

const mempool = [];
for (let i = 0; i < 100; i++) {
    mempool[i] = `${i}`;
}

const db = {
    blockchain : new Blockchain(),
    mempool : mempool
}

module.exports = db;