const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');


describe('GET', () => {
    describe('/api/jokes', () => {
        test('should return JSON response', async () => {
            const response = await request(server)
            .get('/api/jokes')
            expect(response.type).toMatch(/json/)
        })
    })
})

describe('POST' , () => {
    beforeEach(async () => {
        await db('users').truncate() 
    })

    afterAll(async () => {
        await db.seed.run()
    })

    describe('/api/auth/register', () => {
        // test('should return 201 status', ()  => {
        //     return request(server)
        //     .post('/api/auth/register')
        //     .send({username: 'greatguess', password: 'notNullable'})
        //     .then( response => {
        //         expect(response.status).toBe(201)
        //     })
            
        // })

        test('should return JSON object',  function() {
            return request(server)
            .post('/api/auth/register')
            .send({username: 'guest_1', password: 'notNullable'})
            .then( response => {
                expect(response.type).toMatch(/json/i)
            })
            
        })
        
    })

    describe('/api/auth/login', () => {
        test('should return 401 status', () => {
            return request(server)
            .post('/api/auth/login')
            .send({username: 'guest_1', password: 'notNullable'})
            .then(response => {
                expect(response.status).toBe(401)
            })
        })

        // test('should return 401 status', () => {
        //     return request(server)
        //     .post('/api/auth/login')
        //     .send({username: 'guest_1', password: 'notNull'})
        //     .then(response => {
        //         expect(response.status).toBe(401)
        //     })
        //)
    })


})