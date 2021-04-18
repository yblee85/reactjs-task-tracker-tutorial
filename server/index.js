import express from 'express';
import axios from 'axios';
import asyncMiddleware from './middleware/asyncMiddleware.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(`${__dirname}/../build`))

app.get('/api/tasks', asyncMiddleware(async (req, res, next)=>{
    // call db
    const resp = await axios.get('http://backend:3000/tasks');
    console.log("tasks");
    console.log(resp.data);
    res.send(resp.data);
}));

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`server started and listening on port ${port}`);
})