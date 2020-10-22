const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");
const contact = require("./Backend/Routes");


const PORT = 3001 || process.env.PORT;




app.use(express.json());
app.use(express.urlencoded({ extended: true }));



 app.use(express.static("client/build"));
    
 app.get('/testlive', function (req, res) {
        res.send('GET request to the homepage')
      })
app.use("/", cors(), contact);

app.listen (PORT , ()=>{


        console.log("works server , running" , PORT);


})