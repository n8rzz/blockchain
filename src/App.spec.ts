import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from './App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('/v1/api/mine', () => {
    it('should respond', () => {
        return chai.request(app).get('/v1/api/mine')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/v1/api/transactions/new', () => {
    it('should respond', () => {
        return chai.request(app).get('/v1/api/transactions/new')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/v1/api/chain', () => {
    it('should respond', () => {
        return chai.request(app).get('/v1/api/chain')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/v1/api/nodes/register', () => {
    it('should respond', () => {
        return chai.request(app).get('/v1/api/nodes/register')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

describe('/v1/api/nodes/resolve', () => {
    it('should respond', () => {
        return chai.request(app).get('/v1/api/nodes/resolve')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });
});

