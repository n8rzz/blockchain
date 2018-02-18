import BaseCollection from '../base/base.collection';
import { INode } from './i-node';

class NodeCollection extends BaseCollection<INode> {
    constructor() {
        super();
    }

    public addItem(item: INode): void {
        super.addItem(item);
    }

    public createAndAddNode(id: string, address: string): void {
        const node: INode = {
            id,
            address,
        };

        this.addItem(node);
    }

    public removeItem(item: INode): void {
        super.removeItem(item);
    }
}

export default new NodeCollection();
