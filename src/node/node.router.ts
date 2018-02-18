import { Request, Response } from 'express';
import BaseRouter from '../base/base.router';
import NodeCollection from './node.collection';

interface IRegisterNodeRequest extends Request {
    address: string;
}

class NodeRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    public register(req: IRegisterNodeRequest, res: Response): void {
        NodeCollection.createAndAddNode(req.address);

        res.json({
            'message': 'New nodes have been added',
            'totalNodes': NodeCollection.length,
        });
    }

    public resolve(req: Request, res: Response): void {
        res.json({
            'message': 'Our chain is authoritative',
            'chain': []
        });
    }

    private _createHandlers(): this {
        this.router.post('/register', this.register);
        this.router.get('/resolve', this.resolve);

        return this;
    }

}

export default new NodeRouter().router;
