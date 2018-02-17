import { Request, Response } from 'express';
import BaseRouter from '../base.router';
import Blockchain from '../blockchain/blockchain';
import { IBlock } from '../blockchain/i-block';

class MineRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    private _mine(req: Request, res: Response): void {
        const nextBlock: IBlock = Blockchain.mineNextBlock();

        res.status(200).json({
            'index': nextBlock.index,
            'message': 'Forged new block!',
            'proof': nextBlock.proof,
            'previousHash': nextBlock.previousHash,
            'transactions': nextBlock.transactions,
        });
    }

    private _createHandlers(): this {
        this.router.get('/', this._mine);

        return this;
    }

}

export default new MineRouter().router;
