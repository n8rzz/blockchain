import BaseCollection from '../base/base.collection';
import { INode } from './i-node';

class NodeCollection extends BaseCollection<INode> {
    constructor() {
        super();
    }

    public addItem(item: INode): void {
        super.addItem(item);
    }

    public removeItem(item: INode): void {
        super.removeItem(item);
    }
}
