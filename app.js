import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import dotenv from "dotenv";
import express from "express";
import { user } from "./controller/user.js";
dotenv.config();


const expressapp = express();

expressapp.use(express.json());

expressapp.get("/",(req, res) => {
    try {
        let data = plainToClass(user, req.body);
        console.log(data);
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
    res.status(200).send(":D");
});






let config = JSON.parse(process.env.MY_CONFIG);
expressapp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});