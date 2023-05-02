import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from  'dotenv'
import cors from 'cors';

dotenv.config()

const app = express
app.use(cors())
app.use(express.json({ limit: "50mb"}));

app.get('/', (res, req) => {
    res.status(200).json({message : 'Hello from dalle'})
})

app.listen(8080, () => console.log('Server has been started on Port 8080') )