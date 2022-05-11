const Block = require("./Block.js");

class Blockchain {
    constructor() {
        this.chain = [new Block];
        this.difficulty = '0x0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'; // initial difficulty
        this.targetTime = 5;
        this.adjustDifficultyPeriod = 10;
    }
    async addBlock(block) {
        //add block to chain
        this.chain.push(block);
        this.adjustDifficulty();
    }
    blockHeight() {
        return this.chain.length;
    }
    adjustDifficulty() {
        if (this.blockHeight() % 10 === 0) {
            console.log('period time =', this.chain[this.chain.length - 1].timestamp - this.chain[this.chain.length - 10].timestamp);

            let adjustment = (this.chain[this.chain.length - 1].timestamp - this.chain[this.chain.length - 10].timestamp) /
                ((this.targetTime * this.adjustDifficultyPeriod));
            console.log('adjustment =', adjustment);
            this.difficulty = (this.difficulty * adjustment).toString(16);
            while (this.difficulty.length < 64) {
                this.difficulty = '0' + this.difficulty;
            }
            this.difficulty = '0x' + this.difficulty;
            console.log('new difficulty = ', this.difficulty);
        }
    }
    /*  
    MAYBE ADJUST THIS SO OTHER MINERS CAN CHECK THAT BLOCK THEY HEAR ABOUT IS VALID?
    isValid() {
         //loop through blocks other than the first
         for (let i = 1; i < this.chain.length; i++) {
             //check if hash of previous block is equal to previousHash
             if (this.chain[i - 1].toHash().toString() !== this.chain[i].previousHash.toString()) {
                 return false;
             }
         }
         return true;
     } */
}
module.exports = Blockchain;