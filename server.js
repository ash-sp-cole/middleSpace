const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");
const contact = require("./Backend/Routes");
const path = require('path');

const PORT =  process.env.PORT || 3001;




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/build'));
      
      
 app.get('/testlive', function (req, res) {
        res.send('GET request to the homepage')
      })
app.use("/", cors(), contact);

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      });
      
app.listen (PORT , ()=>{


        console.log("works server , running" , PORT);


})