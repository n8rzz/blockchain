import * as mocha from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
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

        it('returns the index of transaction', () => {
            const index: number = blockchain.createTransaction(
                mockTansaction.from,
                mockTansaction.to,
                mockTansaction.qty,
            );

            expect(index).to.eq(blockchain.blockTransactionsLength);
        });
    });

    describe('.hashBlock()', () => {
        it('returns a string', () => {
            const result = blockchain.hashBlock(blockchain.lastBlock);

            expect(typeof result).to.eql('string');
        });
    });

    describe('.isValidProof()', () => {
        beforeEach(() => {
            blockchain.hashBlock(blockchain.lastBlock);
        });

        it('returns false when a hash does not end with `0000`', () => {
            const lastProofMock = 12345;
            const proofMock = 67890;
            const createHashFromStringStub: sinon.SinonStub = sinon.stub(blockchain, 'createHashFromString').returns('1234567891234');

            expect(blockchain.isValidProof(lastProofMock, proofMock)).to.eq(false);
        });

        it('returns true when a hash ends with `0000`', () => {
            const lastProofMock = 12345;
            const proofMock = 67890;
            const createHashFromStringStub: sinon.SinonStub = sinon.stub(blockchain, 'createHashFromString').returns('1234567890000');

            expect(blockchain.isValidProof(lastProofMock, proofMock)).to.eq(true);
        });
    });
});
