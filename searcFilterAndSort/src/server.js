import {config} from 'dotenv'
config()
import express from 'express'
import mongoose from 'mongoose'
import { appRouter } from './app.js'

const app= express()
app.use(express.json())

app.use('/', appRouter)



const port = process.env.PORT || 5692

app.listen(port, async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`applications server connected with database`)
        console.log(`server listning on port ${port}`)
    }catch(err){
        console.log(err)
        process.exit(-1)
    }
})