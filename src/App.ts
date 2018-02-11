import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {

    public express: express.Application = null;

    constructor() {
        this.express = express();

        this._createMiddleware();
        this._mountRoutes();
    }

    private _createMiddleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private _mountRoutes(): void {
        const router = express.Router();

        // TODO: move to route handler files
        router.get('/v1/api/mine/', (req: express.Request, res: express.Response): void => {
            res.json({
                message: 'success'
            });
        });

        router.get('/v1/api/mine/', (req: express.Request, res: express.Response): void => {
            res.json({
                message: 'success'
            });
        });

        router.get('/v1/api/transactions/new', (req: express.Request, res: express.Response): void => {
            res.json({
                message: 'success'
            });
        });

        router.get('/v1/api/chain', (req: express.Request, res: express.Response): void => {
            res.json({
                message: 'success'
            });
        });

        router.get('/v1/api/nodes/register', (req: express.Request, res: express.Response): void => {
            res.json({
                message: 'success'
            });
        });

        router.get('/v1/api/nodes/resolve', (req: express.Request, res: express.Response): void => {
            res.json({
                message: 'success'
            });
        });

        this.express.use('/', router);
    }

}

export default new App().express;
