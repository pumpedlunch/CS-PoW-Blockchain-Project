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
            console.log('\nPrevious Difficulty:', this.difficulty);

            let adjustment = (this.chain[this.chain.length - 1].timestamp - this.chain[this.chain.length - 10].timestamp) /
                ((this.targetTime * this.adjustDifficultyPeriod));
            console.log('Multiplied by adjustment of:', adjustment);
            this.difficulty = (this.difficulty * adjustment).toString(16);
            while (this.difficulty.length < 64) {
                this.difficulty = '0' + this.difficulty;
            }
            this.difficulty = '0x' + this.difficulty;
            console.log('Equals new difficulty:', this.difficulty, '\n');
        }
    }
}
module.exports = Blockchain;