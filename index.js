import express  from "express";
import dotenv from 'dotenv';
dotenv.config()

import morgan from "morgan";

import cors from "cors";

import getNumbers from "./src/getNumbers.js";

const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.get("/duplasena", async (req, res) => {

    const duplasena = await getNumbers;

    res.setHeader('content-type', 'application/json');
    res.json({duplasena})

});



app.listen(process.env.PORT, () =>{
    console.log(`Running on port ${process.env.PORT}`);
})