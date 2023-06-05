'use strict';
const server = require('../src/server');
const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server ", () => {
    it("getting data from home route /", async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("This is Home Page");
    });
    it("handle 404 error", async () => {
        const response = await request.get('/jjjj');
        expect(response.status).toEqual(404);
    });
    test("handle server error", async () => {
        const response = await request.get('/drop');
        expect(response.status).toEqual(500);
    });
    it("testing /info", async () => {
        const response = await request.get('/info');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");
    })
});