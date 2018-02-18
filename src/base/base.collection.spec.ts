import * as mocha from 'mocha';
import * as chai from 'chai';
import { expect } from 'chai';
import BaseCollection from './base.collection';

interface ITestModel {
    id: number;
}

const testModelMock: ITestModel = { id: 3 };

describe('BaseCollection', () => {
    let collection: BaseCollection<ITestModel> = null;

    beforeEach(() => {
        collection = new BaseCollection<ITestModel>();
    });

    afterEach(() => {
        collection = null;
    });

    describe('.addItem()', () => {
        it('adds an item to #items', () => {
            collection.addItem(testModelMock);

            expect(collection.length).to.eql(1);
        });
    })


    describe('.removeItem()', () => {
        it('returns early when an item does not exist in the collection', () => {
            collection.addItem(testModelMock);
            collection.removeItem({ id: 7 });

            expect(collection.length).to.eql(1);
        });

        it('removes an item from the collection', () => {
            collection.addItem(testModelMock);
            collection.removeItem(testModelMock);

            expect(collection.length).to.eql(0);
            expect(collection.items.has(testModelMock)).to.eql(false);
        });
    });
});
