import { Request, Response } from 'express';
import Blockchain from '../blockchain/blockchain';
import { ITransaction } from '../blockchain/i-transaction';
import BaseRouter from '../base/base.router';

interface ITransactionRequest extends Request {
    to: string,
    from: string,
    qty: number,
}

function _hasValidTransactionParams(to: string, from: string, qty: number): boolean {
    return typeof to === 'string' &&
        typeof from === 'string' &&
        typeof qty === 'number';
}

class TransactionRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    /**
     *
     * @param req ITransactionRequest
     * @param res Response
     */
    private _create(req: ITransactionRequest, res: Response): void {
        const { to, from, qty } = req.body;

        if (!_hasValidTransactionParams(to, from, qty)) {
            res.status(400).json({
                message: 'Invalid parameters passed to `/transactions/create`.',
                status: 400,
            });

            return;
        }

        const transactionIndex: number = Blockchain.createTransaction(from, to, qty);

        res.status(201).json({
            message: `Success! Transaction will be added to Block ${transactionIndex}`
        });
    }

    private _createHandlers(): this {
        this.router.post('/create', this._create);

        return this;
    }

}

export default new TransactionRouter().router;
