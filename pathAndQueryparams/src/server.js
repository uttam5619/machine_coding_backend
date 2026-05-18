import {config} from 'dotenv';
config();
import express from 'express';
import { addition, multiplication, substraction, division } from './app.js';

const app = express();
app.use(express.json())


app.post('/addition',addition)
app.post('/substraction', substraction)
app.post('/multiplication',multiplication)
app.post('/division',division)

const port = process.env.PORT ||3256

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})