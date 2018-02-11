class Blockchain {

    private currentTransactions: any[] = [];
    private chain: any[] = [];
    private nodes: any[] = [];

    get lastBlock(): void {
        return null;
    }

    constructor() {

    }

    public static hashBlock(block: any): void {}

    public static isValidProof(lastProof: any, proof: any, lastHash: any): void {}

    public registerNode(): void {}

    public isChainValid(): boolean {
        return false;
    }

    public resolveConflicts(): void {}

    public createBlock(): void {}

    public createTransaction(): void {}

    public proofOfWork(lastBlock: any): void {}

    public destroy(): this {
        return this._destroy();
    }

    private _destroy(): this {
        this.currentTransactions = [];
        this.chain = [];
        this.nodes = [];

        return this;
    }

}

export default new Blockchain();
