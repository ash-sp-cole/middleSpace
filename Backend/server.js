const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");



const PORT = 3001 || process.env


console.log(process.env.PASSWORD)

app.use(express.json());



app.listen (PORT , ()=>{


        console.log("works server , running" , PORT);


})