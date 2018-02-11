import * as mocha from 'mocha';
import * as chai from 'chai';
import { expect } from 'chai';
import chaiHttp = require('chai-http');
import app from './App';

chai.use(chaiHttp);

describe('/api/v1/mine', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/mine')
            .then((res) => {
                expect(res.status).to.eql(200);
                expect(res.body).to.have.all.keys([
                    'message',
                    'index',
                    'transactions',
                    'proof',
                    'previousHash',
                ]);
            });
    });
});

describe('/api/v1/transactions/create', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/transactions/create')
            .then((res) => {
                expect(res.status).to.eql(200);
                expect(res.body).to.have.all.keys([
                    'message',
                ]);
            });
    });
});

describe('/api/v1/chain', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/chain')
            .then((res) => {
                expect(res.status).to.eql(200);
                expect(res.body).to.have.all.keys([
                    'chain',
                    'length',
                ]);
            });
    });
});

describe('/api/v1/nodes/register', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/nodes/register')
            .then((res) => {
                expect(res.status).to.eql(200);
                expect(res.body).to.have.all.keys([
                    'message',
                    'totalNodes',
                ]);
            });
    });
});

describe('/api/v1/nodes/resolve', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/nodes/resolve')
            .then((res) => {
                expect(res.status).to.eql(200);
                expect(res.body).to.have.all.keys([
                   'message',
                   'chain',
                ]);
            });
    });
});

