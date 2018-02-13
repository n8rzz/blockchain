import * as mocha from 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import Blockchain from './blockchain';
import { ITransaction } from './i-transaction';

describe('Blockchain', () => {
    afterEach(() => {
        Blockchain.reset();
    });

    describe('genesis block', () => {
        it('is created on instantiation', () => {
            expect(Blockchain.length).to.eql(2);
        });
    });

    describe('.createTransaction()', () => {
        const mockTansaction: ITransaction = {
            from: 'abcdef',
            to: 'ghijk',
            qty: 3,
        };

        it('adds a transaction to #currentTransactions', () => {
            Blockchain.createTransaction(
                mockTansaction.from,
                mockTansaction.to,
                mockTansaction.qty,
            );

            expect(Blockchain.lastTransaction).to.eql(mockTansaction);
        });

        it('returns the index of transaction', () => {
            const index: number = Blockchain.createTransaction(
                mockTansaction.from,
                mockTansaction.to,
                mockTansaction.qty,
            );

            expect(index).to.eq(Blockchain.blockTransactionsLength);
        });
    });

    describe('.hashBlock()', () => {
        it('returns a string', () => {
            const result = Blockchain.hashBlock(Blockchain.lastBlock);

            expect(typeof result).to.eql('string');
        });
    });

    describe('.isValidProof()', () => {
        beforeEach(() => {
            Blockchain.hashBlock(Blockchain.lastBlock);
        });

        it('returns false when a hash does not end with `0000`', () => {
            const lastProofMock = 12345;
            const proofMock = 67890;
            const createHashFromStringStub: sinon.SinonStub = sinon.stub(Blockchain, 'createHashFromString').returns('1234567891234');

            expect(Blockchain.isValidProof(lastProofMock, proofMock)).to.eq(false);

            createHashFromStringStub.restore();
        });

        it('returns true when a hash ends with `0000`', () => {
            const lastProofMock = 12345;
            const proofMock = 67890;
            const createHashFromStringStub: sinon.SinonStub = sinon.stub(Blockchain, 'createHashFromString').returns('1234567890000');

            expect(Blockchain.isValidProof(lastProofMock, proofMock)).to.eq(true);

            createHashFromStringStub.restore();
        });
    });
});
