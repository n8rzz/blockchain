import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import ChainRouter from './chain/chain.router';
import MineRouter from './mine/mine.router';
import NodeRouter from './node/node.router';
import TransactionRouter from './transaction/transaction.router';

class App {

    public express: express.Application = null;

    constructor() {
        this.express = express();

        this._createMiddleware();
        this._mountRouteHandlers();
    }

    private _createMiddleware(): void {
        if (process.env.NODE_ENV !== 'test') {
            this.express.use(morgan('common'));
        }

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private _mountRouteHandlers(): void {
        this.express.use('/api/v1/chain', ChainRouter);
        this.express.use('/api/v1/mine', MineRouter);
        this.express.use('/api/v1/nodes', NodeRouter);
        this.express.use('/api/v1/transactions', TransactionRouter);
    }

}

export default new App().express;
