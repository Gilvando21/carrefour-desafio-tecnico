
const request = require('supertest')
const { expect } = require('chai')

const BASE_URL = 'https://serverest.dev'

let userId

describe('Users API Full CRUD', () => {

it('Authenticate user JWT', async ()=>{
const res = await request(BASE_URL)
.post('/login')
.send({
email: "admin@serverest.dev",
password: "admin"
})
expect(res.status).to.equal(200)
})

it('Create user POST /usuarios', async ()=>{
const res = await request(BASE_URL)
.post('/usuarios')
.send({
nome: "QA Automation",
email: "qa"+Date.now()+"@test.com",
password: "123456",
administrador: "true"
})
expect(res.status).to.equal(201)
userId = res.body._id
})

it('Get users GET /usuarios', async ()=>{
const res = await request(BASE_URL).get('/usuarios')
expect(res.status).to.equal(200)
})

it('Update user PUT /usuarios/:id', async ()=>{
const res = await request(BASE_URL)
.put('/usuarios/'+userId)
.send({
nome: "QA Updated",
email: "qa"+Date.now()+"@test.com",
password: "123456",
administrador: "true"
})
expect(res.status).to.equal(200)
})

it('Delete user DELETE /usuarios/:id', async ()=>{
const res = await request(BASE_URL).delete('/usuarios/'+userId)
expect(res.status).to.equal(200)
})

})
