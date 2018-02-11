import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from './App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('/api/v1/mine', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/mine')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/api/v1/transactions/new', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/transactions/new')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/api/v1/chain', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/chain')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/api/v1/nodes/register', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/nodes/register')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/api/v1/nodes/resolve', () => {
    it('should respond', () => {
        return chai.request(app).get('/api/v1/nodes/resolve')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

