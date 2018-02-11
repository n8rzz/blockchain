import { ITransaction } from './i-transaction';

export interface IBlock {
    index: number,
    timestamp: number,
    transactions: ITransaction[],
    proof: number,
    previousHash: string
}
