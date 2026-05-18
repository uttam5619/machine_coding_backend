import { config } from 'dotenv'

import express from express
const app = express()




const port = process.env.port || 5645

app.listen(port,()=>{
    console.info(`server listning on port ${port}`)
})