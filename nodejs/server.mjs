import * as dotenv from 'dotenv'
dotenv.config({ override: true });
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import cors from 'cors';
import moment from 'moment';
import { schema } from './src/index.js';


const app = express();

app.use(cors());

/**
 * Override console.log for logging timestamp
 */
const logger = console.log;
console.log = (...args) => {
    logger(`[${moment().format('YYYY/MM/DD HH:mm:ss')}]`, ...args);
};

//connect MongoDB
const uri = process.env.DATABASE_URL;
// console.log(uri);

const dbConn = async () => {
    await mongoose.connect(uri, {
        socketTimeoutMS: 0,
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
dbConn()
    .then(console.log('🎉 connected to database successfully'))
    .catch(error => console.error(error));


//start Apollo server
const { url } = await startStandaloneServer(schema, {
    listen: { port: process.env.NODEJS_PORT },
});
console.log(`🚀  Server ready at: ${url}`);