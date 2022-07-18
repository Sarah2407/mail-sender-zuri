require('dotenv').config()
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = 3000;

app.get("/", (req, res) => {
    res.send("Send mail");
  });

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'false',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    }
  });

let info = transporter.sendMail({
  from: process.env.MAIL_USERNAME,
  to: process.env.MAIL_RECEIVER,
  subject: "Test mail", 
  text: "Hey, this is just a test", 
  html: "<b>Hey, this is just a test</b>",
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
});