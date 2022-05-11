# Blockchain-Project
Chainshot Ethereum Develope Bootcamp Week 2 Project: Build Your Own Blockchain <br />
<br />
Features Included<br />
-Blocks in blockchain include<br />
    -transactions: pseudo txs including a coinbase and txs taken from a pre-stocked mempool until transactions reach MAX_TX. Txs are removed from the mempool upon block being successfully mined.<br />
    -previousHash: hash of previous block<br />
    -timestamp: unix value timestamp of when prospective block is composed<br />
    -nonce: value that is iterated to produce a block hash below the difficulty level<br />
-Difficulty automatically adjusts based on block mining speed
-Miner can be started and stopped with scripts
<br />
Features to Add<br />
-to do:
    -allow for competitive mining from multiple miners that broadcast and listen for new blocks and build off longest blockchain


back-burner:

    -improve transactions from pseudo-tx:
        -hashed merkle roots
        -UTXOs
        -actually move value between accounts
    -add public key cryptography
    -add consensus rules for miners/nodes to check new blocks & add a malicious miner.
    -add addresses for miners, make coinbase tx increase their balance
    


Issues with solution:<br />