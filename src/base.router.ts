import { Router } from 'express';

class BaseRouter {

    public router: Router = null;

    constructor() {
        this.router = Router();
    }

}

export default BaseRouter;
