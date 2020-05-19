const request = require('supertest');
const express = require('express');
const db = require('./jokes-model');
// const { expectCt } = require('helmet');
const server = express();

server.use(express.json())

describe('GET /api/jokes' , () => {
    describe('testing /api/jokes' , () => {
        test('should return status code', async () => {
            const response = await request(server).get('/api/jokes')
            expect(response.status).toEqual(404)
        })
    })

    describe('testing /api/jokes' , () => {
        test('should return json type', async () => {
            const response = await request(server).get('/api/jokes')
            expect(response.type).toMatch(/text/)
        })
    })
})
