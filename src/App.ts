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

        router.get('/v1/api', (req: any, res: any): void => {
            res.json({
                message: 'success'
            });
        });

        this.express.use('/', router);
    }

}

export default new App().express;
