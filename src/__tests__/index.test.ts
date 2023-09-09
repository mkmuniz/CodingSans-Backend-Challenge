
import app from "../app";
import { AppDataSource } from "../ormconfig";
const request = require('supertest');

let server: any;

describe('Test api routes', () => {
    beforeEach(async () => {
        await AppDataSource.initialize().then(() => {
            server = app.listen(4000, () => {
                console.log('Its running at port 4000');
            });
        }).catch(error => console.log(error))
    });

    afterEach(() => {
        AppDataSource.destroy();
        server.close();
    });

    test('Verify if server is online', async () => {
        const response = await request(server).get('/');

        expect(response.body.message).toBe('Its working');
    });

    test('Register a new user', async () => {
        const response = await request(server).post('/signup').send({
            "username": "meeika",
            "password": "512845534"
        });

        expect(response.body.status).toBe(200);
    });
});