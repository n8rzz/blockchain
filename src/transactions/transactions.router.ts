import { Request, Response } from 'express';
import BaseRouter from '../base.router';

class TransactionsRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    public create(req: Request, res: Response): void {
        res.json({
            message: 'success'
        });
    }

    private _createHandlers(): this {
        this.router.get('/create', this.create);

        return this;
    }

}

export default new TransactionsRouter().router;
