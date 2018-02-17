import { Request, Response } from 'express';
import BaseRouter from '../base/base.router';
import Blockchain from '../blockchain/blockchain';

class ChainRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    public chain(req: Request, res: Response): void {
        res.json({
            'chain': Blockchain.chain,
            'length': Blockchain.length,
        });
    }

    private _createHandlers(): this {
        this.router.get('/', this.chain);

        return this;
    }

}

export default new ChainRouter().router;
