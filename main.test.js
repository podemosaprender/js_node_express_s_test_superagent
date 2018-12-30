//INFO: los tests para mi aplicacion, escribo npm run test y jest y supertest ejecutan todo

const request = require('supertest');
const app = require('./app');
describe('Test the root path /', () => {
    test('It should answer to the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });

    test('It should answer X', () => {
        return request(app).get("/").expect(200,"Tiene que FALLAR, algo distinto de esto");
    });

})
