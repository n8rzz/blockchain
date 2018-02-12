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
    it('should return 400 when passed invalid params', () => {
        const mockInvalidTransaction: object = {
            to: "tom",
            from: "callahan"
        };

        return chai.request(app).post('/api/v1/transactions/create')
            .send(mockInvalidTransaction)
            .catch((err) => {
                expect(err.status).to.eql(400);
                // expect(err.req.body).to.eql({
                //     message: 'Invalid parameters passed to `/transactions/create`.',
                //     status: 400,
                // });
            });
    });

    it('should return 201 when passed valid params', () => {
        const mockValidTransaction: object = {
            to: "tom",
            from: "richard",
            qty: 3
        };

        return chai.request(app).post('/api/v1/transactions/create')
            .send(mockValidTransaction)
            .then((res) => {
                expect(res.status).to.eql(201);
                expect(res.body).to.eql({
                    message: 'Success! Transaction will be added to Block 1'
                });
            })
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

