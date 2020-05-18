const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');


describe('POST' , () => {
    beforeEach(async () => {
        await db('users').truncate() 
    })

    describe('/api/auth/register', () => {
        test('should return 201 status',  function() {
            return request(server)
            .post('/api/auth/register')
            .send({username: 'guest_1', password: 'notNullable'})
            .then( response => {
                expect(response.status).toBe(201)
            })
            
        })

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
    })


})