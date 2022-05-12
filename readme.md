# Blockchain-Project
Chainshot Ethereum Developer Bootcamp Week 2 Project: Build Your Own Blockchain <br />
<br />
Features Included<br />
-Blocks in blockchain include<br />
    -transactions: pseudo txs including a coinbase and txs taken from a pre-stocked mempool until transactions reach MAX_TX. Txs are removed from the mempool upon block being successfully mined.<br />
    -previousHash: hash of previous block<br />
    -timestamp: unix value timestamp of when prospective block is composed<br />
    -nonce: value that is iterated to produce a block hash below the difficulty level<br />
-Difficulty automatically adjusts based on block mining speed<br />
-Miner can be started and stopped with scripts<br />

To run:<br />
-```nodemon index``` in project root folder
-```node startMining``` in scripts folder
-```node stopMining``` in scripts folder