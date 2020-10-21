const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");
const contact = require("./Routes");


const PORT = 3001 || process.env

app.use( express.static( `${__dirname}/../build` ) );


app.use(express.json());

app.use("/", cors(), contact);

app.listen (PORT , ()=>{


        console.log("works server , running" , PORT);


})