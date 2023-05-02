import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router()

dotenv.config();

router.route('/').get((res, req) => {
    res.status(200).json({'message': "hello from dalle"})
})