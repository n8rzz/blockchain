import { Request, Response } from 'express';
import BaseRouter from '../base.router';

class MineRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    public mine(req: Request, res: Response): void {
        res.status(200).json({
            'message': 'New Block Forged!',
            'index': -1,
            'transactions': null,
            'proof': '',
            'previousHash': '',
        });
    }

    private _createHandlers(): this {
        this.router.get('/', this.mine);

        return this;
    }

}

export default new MineRouter().router;
