const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const { expectCt } = require('helmet');

describe('POST' , () => {
    beforeEach(async () => {
        await db('users').truncate();
    })
    describe('/api/auth/register', () => {
        it('should return 201 status', async () => {
            await request(server)
            .post('/api/auth/register')
            .send({username: 'guest', password: 'notNullable'})
            .then( res => {
                expect(res.status).toBe(201)

            })
            
        })
        
    })
})