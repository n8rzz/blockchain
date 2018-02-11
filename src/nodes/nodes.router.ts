import { Request, Response } from 'express';
import BaseRouter from '../base.router';

class NodesRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    public register(req: Request, res: Response): void {
        res.json({
            message: 'success'
        });
    }

    public resolve(req: Request, res: Response): void {
        res.json({
            message: 'success'
        });
    }

    private _createHandlers(): this {
        this.router.get('/register', this.register);
        this.router.get('/resolve', this.resolve);

        return this;
    }

}

export default new NodesRouter().router;
