const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// exports.mail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.userEmail,
//     pass: process.env.pass,
//     clientId: process.env.clientId,
//     clientSecret: process.env.clientSecret,
//     refreshToken: process.env.refreshToken,
//   },
// });

// Create the transporter with the required configuration for Outlook
// change the user and pass !
exports.mail = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.NODE_ENV_senderOutlookEmail,
    pass: process.env.NODE_ENV_outlookPassword,
  },
});
