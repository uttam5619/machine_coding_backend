import { config } from 'dotenv'
config()
import mongoose from 'mongoose'
import { approuter } from "./app.js"

import express from "express"
const app = express()

app.use(express.json())

app.use('/',approuter)



const port = process.env.port || 5645

app.listen(port, async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_URI)
        console.info(`application connectected with database`)
        console.info(`server listning on port ${port}`)
    }catch(err){
        console.log(err)
        process.exit(-1)
    }
})