import * as _ from 'lodash';
import * as hasha from 'hasha';
import { IBlock } from './i-block';
import { ITransaction } from './i-transaction';

class Blockchain {

    public blockTransactions: ITransaction[] = [];
    public chain: IBlock[] = [];
    private nodes: any[] = [];

    get length(): number {
        return this.chain.length;
    }

    get lastBlock(): IBlock {
        return this.chain[this.lastBlockIndex];
    }

    get lastBlockIndex(): number {
        return this.chain.length - 1;
    }

    get lastTransaction(): ITransaction {
        return this.blockTransactions[this.lastTransactionIndex];
    }

    get lastTransactionIndex(): number {
        return this.blockTransactionsLength - 1;
    }

    get blockTransactionsLength(): number {
        return this.blockTransactions.length;
    }

    constructor() {
        this.init();
    }

    public createBlock(proof: number, previousHash: string): IBlock {
        const nextBlock: IBlock = {
            index: this.length + 1,
            timestamp: new Date().getTime(),
            transactions: [
                ...this.blockTransactions
            ],
            proof,
            previousHash,
        };

        this._addBlockToChain(nextBlock);
        this.blockTransactions = [];

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

    public createHashFromString(item: string): string {
        return hasha(item);
    }


    public findProofOfWork(lastProof: number): number {
        let proof: number = 0;

        while (!this.isValidProof(lastProof, proof)) {
            proof += 1;
        }

        return proof;
    }

    public hashBlock(block: IBlock): string {
        const blockWithSortedKeys: IBlock = this._sortBlockKeys(block);
        const blockString: string = JSON.stringify(blockWithSortedKeys);

        return this.createHashFromString(blockString);
    }

    public init(): void {
        this.createBlock(100, '1');
    }

    public isValidProof(lastProof: number, proof: number): boolean {
        const guess: string = `${lastProof}${proof}`;
        const guessHash = this.createHashFromString(guess);
        const proofValidatorCharacters: string = guessHash.slice(-4);

        return proofValidatorCharacters === '0000';
    }

    // public registerNode(): void {}

    public reset(): void {
        this.blockTransactions = [];
        this.chain = [];
        this.nodes = [];
    }

    // public resolveConflicts(): void {}

    // public isChainValid(): boolean {
    //     return false;
    // }

    private _addBlockToChain(block: IBlock): void {
        this.chain.push(block);
    }

    private _addTransactionToBlock(transaction: ITransaction): number {
        this.blockTransactions.push(transaction);

        return this.blockTransactions.length;
    }

    private _sortBlockKeys(block: IBlock): IBlock {
        return _.fromPairs(_.toPairs(block).sort()) as IBlock;
    }
}

export default new Blockchain();
