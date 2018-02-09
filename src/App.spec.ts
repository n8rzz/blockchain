import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from './App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('/v1/api/', () => {
    it('should respond', () => {
        return chai.request(app).get('/v1/api')
            .then((res) => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('should have a message key', () => {
        return chai.request(app).get('/v1/api/')
            .then((res) => {
                expect(res.body.message).to.eql('success');
            });
    });
});
