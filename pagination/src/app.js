import express from "express"
import { createUser, deleteUser, getUserDetails, getUserListv2, updateUser } from "./controllers.js"

export const approuter = express.Router()

approuter.post('/app/user',createUser)
approuter.get('/app/:email',getUserDetails)
approuter.get('/app/userList', getUserListv2)
approuter.put('/app/:email',updateUser)
approuter.delete('/app/:userId',deleteUser)