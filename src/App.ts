import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import ChainRouter from './chain/chain.router';
import MineRouter from './mine/mine.router';
import NodesRouter from './nodes/nodes.router';
import TransactionsRouter from './transactions/transactions.router';

class App {

    public express: express.Application = null;

    constructor() {
        this.express = express();

        this._createMiddleware();
        this._mountRouteHandlers();
    }

    private _createMiddleware(): void {
        this.express.use(morgan('tiny'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private _mountRouteHandlers(): void {
        this.express.use('/api/v1/chain', ChainRouter);
        this.express.use('/api/v1/mine', MineRouter);
        this.express.use('/api/v1/nodes', NodesRouter);
        this.express.use('/api/v1/transactions', TransactionsRouter);
    }

}

export default new App().express;
