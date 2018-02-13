import { Request, Response } from 'express';
import BaseRouter from '../base.router';
import Blockchain from '../blockchain/blockchain';
import { IBlock } from '../blockchain/i-block';

function _mineNextBlock(): IBlock {
    const previousBlock: IBlock = Blockchain.lastBlock;
    const lastProof: number = previousBlock.proof;
    const foundProof: number = Blockchain.findProofOfWork(lastProof);

    Blockchain.createTransaction('0', '1234', 1);

    const previousHash: string = Blockchain.hashBlock(previousBlock);

    return Blockchain.createBlock(foundProof, previousHash);
}

class MineRouter extends BaseRouter {

    constructor() {
        super();

        return this._createHandlers();
    }

    private _mine(req: Request, res: Response): void {
        const nextBlock: IBlock = _mineNextBlock();

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
