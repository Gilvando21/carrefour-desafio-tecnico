const request = require("supertest")
const { BASE_URL } = require("../auth/auth")

function getUsers(){
 return request(BASE_URL).get("/usuarios")
}

function createUser(data,token){
 return request(BASE_URL)
  .post("/usuarios")
  .set("Authorization",token)
  .send(data)
}

function getUserById(id){
 return request(BASE_URL).get(`/usuarios/${id}`)
}

function updateUser(id,data,token){
 return request(BASE_URL)
  .put(`/usuarios/${id}`)
  .set("Authorization",token)
  .send(data)
}

function deleteUser(id,token){
 return request(BASE_URL)
  .delete(`/usuarios/${id}`)
  .set("Authorization",token)
}

module.exports={
 getUsers,
 createUser,
 getUserById,
 updateUser,
 deleteUser
}