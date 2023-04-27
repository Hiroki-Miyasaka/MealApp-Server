import express from "express";
import bodyParser from "body-parser";

const headers = new express.Router()


headers.use((req, res, next) => {
    res.setHeader("Access-Controll-Allow-Origin", "*");
    res.setHeader(
        "Access-Controll-Allow-Origin", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH,PUT, DELETE, OPTIONS"
    );
    next();
})

headers.use(bodyParser.json());
headers.use(bodyParser.urlencoded({extended: false}));

export default headers;