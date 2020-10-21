var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require("cors");


var transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
 //  secureConnection: true,
  // port: 465,
   service: "Gmail",
   //debug : true,
   auth: {
       user: process.env.EMAIL,
       pass:process.env.PASSWORD
   }


});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send',cors(), (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: process.env.EMAIL,  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;