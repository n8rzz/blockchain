import * as uuid from 'uuid/v4';
import BaseCollection from '../base/base.collection';
import { INode } from './i-node';

class NodeCollection extends BaseCollection<INode> {
    constructor() {
        super();
    }

    public addItem(item: INode): void {
        super.addItem(item);
    }

    public createAndAddNode(address: string): void {
        const node: INode = {
            id: uuid(),
            address,
        };

        this.addItem(node);
    }

    public removeItem(item: INode): void {
        super.removeItem(item);
    }
}

export default new NodeCollection();
