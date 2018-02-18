import * as mocha from 'mocha';
import * as chai from 'chai';
import * as uuid from 'uuid/v4';
import { expect } from 'chai';
import NodeCollection from './node.collection';
import { INode } from './i-node';

describe('NodeCollection', () => {
    beforeEach(() => {
        NodeCollection.items.clear();
    });

    afterEach(() => {
        NodeCollection.items.clear();
    });

    describe('.createAndAddItem()', () => {
        it('creates an INode then adds to #items', () => {
            const validRequestMock: INode = {
                id: uuid(),
                address: 'http://localhost:3000/',
            };

            NodeCollection.createAndAddNode(validRequestMock.id, validRequestMock.address);

            expect(NodeCollection.length).to.eql(1);
        });
    })
});
