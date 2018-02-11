import * as _ from 'lodash';
import { IBlock } from './i-block';
import { ITransaction } from './i-transaction';

class Blockchain {

    public currentTransactions: ITransaction[] = [];
    public chain: IBlock[] = [];
    // private nodes: any[] = [];

    get lastBlock(): IBlock {
        return this.chain[this.lastBlockIndex];
    }

    get lastBlockIndex(): number {
        return this.chain.length - 1;
    }

    get lastTransaction(): ITransaction {
        return this.currentTransactions[this.lastTransactionIndex];
    }

    get lastTransactionIndex(): number {
        return this.blockTransactionsLength - 1;
    }

    get blockTransactionsLength(): number {
        return this.currentTransactions.length;
    }

    constructor() {
        this.createBlock(100, '1');
    }

    public hashBlock(block: IBlock): void {
        const blockToHashWithSortedKeys: IBlock = this._sortBlockKeys(block);


    }

    // public isValidProof(lastProof: any, proof: any, lastHash: any): void {}

    // public registerNode(): void {}

    // public isChainValid(): boolean {
    //     return false;
    // }

    public createBlock(proof: number, previousHash: string): IBlock {
        const nextBlock: IBlock = {
            index: this.blockTransactionsLength + 1,
            timestamp: new Date().getTime(),
            transactions: [
                ...this.currentTransactions
            ],
            proof,
            previousHash,
        };

        this.currentTransactions = [];

        this._addBlockToChain(nextBlock);

        return nextBlock;
    }

    public createTransaction(from: string, to: string, qty: number): number {
        const nextTransaction: ITransaction = {
            from,
            to,
            qty,
        };

        return this._addTransactionToBlock(nextTransaction);
    }

    // public resolveConflicts(): void {}

    // public proofOfWork(lastBlock: IBlock): void {}

    private _addBlockToChain(block: IBlock): void {
        this.chain.push(block);
    }

    private _addTransactionToBlock(transaction: ITransaction): number {
        this.currentTransactions.push(transaction);

        return this.blockTransactionsLength;
    }

    private _sortBlockKeys(block: IBlock): IBlock {
        return _.fromPairs(_.toPairs(block).sort()) as IBlock;
    }
}

export default Blockchain;
