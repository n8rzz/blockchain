"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.express = null;
        this.express = express();
        this._createMiddleware();
        this._mountRoutes();
    }
    _createMiddleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    _mountRoutes() {
        const router = express.Router();
        router.get('/v1/api', (req, res) => {
            res.json({
                message: 'success'
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map