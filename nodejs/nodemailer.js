/*
  -----------------------------------------------------------------------------
  Nodemailer:
  -----------------------------------------------------------------------------
  - Nodemailer is a module for Node.js applications to allow easy email sending.
  - It works by creating a 'transporter' object which handles the actual sending mechanism.
  - While it supports many services (like Gmail, Outlook), for Gmail specifically, 
    you often need to use an "App Password" if 2-Factor Authentication is enabled, 
    or allow "Less Secure Apps" (though this is being deprecated).

  Steps to Send Email:
  1. Import 'nodemailer'.
  2. Create a transporter object using `nodemailer.createTransport()`.
  3. Define email options (sender, receiver, subject, body).
  4. Use `transporter.sendMail()` to send the email.
*/

import express from "express";
import nodemailer from "nodemailer"; // Import the Nodemailer module

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ----------------------------------------------------------------------------
// Transporter Setup:
// ----------------------------------------------------------------------------
// The transporter is the object that will actually send the emails.
// We configure it with the service provider and authentication details.

const transporter = nodemailer.createTransport({
  service: "gmail", // We are using Gmail as the service provider
  auth: {
    user: "vikasku001@gmail.com", // Your email address
    pass: "", // Your password (or App Password if 2FA is on)
    // NOTE: It is highly recommended to use environment variables for sensitive data like passwords.
    // Example: process.env.EMAIL_PASSWORD
  },
});

// ----------------------------------------------------------------------------
// Mail Options:
// ----------------------------------------------------------------------------
// This object configures the email details: who is it from, who is it for,
// the subject line, and the content (text or html).

const mailOptions = {
  from: "vikaskumar20012001@gmail.com", // Sender address
  to: "anish13102000@gmail.com", // Receiver address(es) (comma separated for multiple)
  subject: "Test Email from Node.js", // Subject line
  text: "This is a test email sent from Node.js", // Plain text body
  // html: "<h1>Hello</h1><p>This is HTML content</p>" // You can also send HTML content
};

// ----------------------------------------------------------------------------
// Sending the Email:
// ----------------------------------------------------------------------------
// The sendMail method sends the email using the configured transporter
// and the defined mail options.

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    // If an error occurs, log it to the console
    console.log(error);
  } else {
    // If successful, log the response information
    // 'info.response' contains the server response
    console.log("Email sent: " + info.response);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
