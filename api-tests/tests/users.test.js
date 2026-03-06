const request = require('supertest')
const { expect } = require('chai')

const BASE_URL = 'https://serverest.dev'

let userId

describe('Users API - CRUD Validation', function(){

this.retries(2)

it('Validate login endpoint', async () => {

const res = await request(BASE_URL)
.post('/login')
.send({
 email: 'invalid@test.com',
 password: 'invalid'
})

expect(res.status).to.be.oneOf([200,401])

})

it('Create new user', async ()=>{

const email = `qa_${Date.now()}@test.com`

const res = await request(BASE_URL)
.post('/usuarios')
.send({
 nome:'QA Automation',
 email:email,
 password:'123456',
 administrador:'true'
})

expect(res.status).to.equal(201)
expect(res.body).to.have.property('_id')

userId = res.body._id

})

it('Retrieve users list', async ()=>{

const res = await request(BASE_URL)
.get('/usuarios')

expect(res.status).to.equal(200)

})

it('Update existing user', async ()=>{

const email = `qa_update_${Date.now()}@test.com`

const res = await request(BASE_URL)
.put(`/usuarios/${userId}`)
.send({
 nome:'QA Updated',
 email:email,
 password:'123456',
 administrador:'true'
})

expect(res.status).to.equal(200)

})

it('Delete created user', async ()=>{

const res = await request(BASE_URL)
.delete(`/usuarios/${userId}`)

expect(res.status).to.equal(200)

})

})