import * as mocha from 'mocha';
import { expect } from 'chai';
import Blockchain from './blockchain';
import { ITransaction } from './i-transaction';

describe('Blockchain', () => {
    let blockchain: Blockchain = null;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    afterEach(() => {
        blockchain = null;
    });

    describe('genesis block', () => {
        it('is created on instantiation', () => {
            expect(blockchain.chain.length).to.eql(1);
        });
    });

    describe('.createTransaction()', () => {
        const mockTansaction: ITransaction = {
            from: 'abcdef',
            to: 'ghijk',
            qty: 3,
        };

        it('adds a transaction to #currentTransactions', () => {
            blockchain.createTransaction(
                mockTansaction.from,
                mockTansaction.to,
                mockTansaction.qty,
            );

            expect(blockchain.lastTransaction).to.eql(mockTansaction);
        });

        // it('returns the index of transaction', () => {
        //     blockchain.createTransaction(
        //         mockTansaction.from,
        //         mockTansaction.to,
        //         mockTansaction.qty,
        //     );

        //     console.log('+-+', blockchain);

        //     expect(blockchain.currentTransactions[blockchain.length]).to.eql(mockTansaction);
        // });
    });

    describe('.hash()', () => {
        it('sorts object keys', () => {
            blockchain.hashBlock(blockchain.lastBlock);
        });
    });

});
