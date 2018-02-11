import { Request, Response } from 'express';
import BaseRouter from '../base.router';

class ChainRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    public chain(req: Request, res: Response): void {
        res.json({
            'chain': null,
            'length': -1,
        });
    }

    private _createHandlers(): this {
        this.router.get('/', this.chain);

        return this;
    }

}

export default new ChainRouter().router;
