const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const { expectCt } = require('helmet');

describe('POST' , () => {
    beforeEach(async () => {
        await db.seed.run()  })

    afterAll( async () => {
        await db.destroy()

    })
    
    describe('/api/auth/register', () => {
        test('should return 201 status', async () => {
            const response = await request(server)
            .post('/api/auth/register')
            .send({username: 'guest', password: 'notNullable'})
             expect(response.status).toBe(201)       
        })
        
    })

    describe('/api/auth/login', () => {
        test('should return 200 status', async () => {
            const response = await request(server)
            .post('/api/auth/register')
            .send({username: 'guest', password: 'notNullable'})
            expect(response.status).toBe(201)
        })
    })
})