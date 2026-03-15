const request = require("supertest")

const BASE_URL = "https://serverest.dev"

async function getToken(){

  const email = `qa${Date.now()}@test.com`

  // cria usuário
  await request(BASE_URL)
    .post("/usuarios")
    .send({
      nome: "QA Automation",
      email: email,
      password: "123456",
      administrador: "true"
    })

  // faz login
  const res = await request(BASE_URL)
    .post("/login")
    .send({
      email: email,
      password: "123456"
    })

  return res.body.authorization
}

module.exports = { BASE_URL, getToken }