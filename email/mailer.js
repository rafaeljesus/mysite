module.exports = function(){

  var nodemailer = require('nodemailer');

  var provider = {
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  };
  return nodemailer.createTransport('SMTP', provider);
};
