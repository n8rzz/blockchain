import * as mocha from 'mocha';
import * as chai from 'chai';
import Blockchain from './blockchain';

describe('Blockchain', () => {
    beforeEach(() => {
        Blockchain.destroy();
    });
});
