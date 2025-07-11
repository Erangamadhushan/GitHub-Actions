const request = require('supertest');
const app = require('../../server');


describe('GET /', () => {
    it('should return current date and time', async () => {
        const response = await request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toHaveProperty('status', 'OK');
        expect(response.body).toHaveProperty('message');
        expect(new Date(response.body.message)).toBeInstanceOf(Date);
    });
});