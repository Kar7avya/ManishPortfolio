const express = require('express');
const router = new express.Router();
const users = require('../models/userschema');
const nodemailer = require('nodemailer');
const imap = require('imap-simple');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karthavyasrivastava@gmail.com',
    pass: 'hqbm jhzu njzl yjik' // Use the App Password you generated
  }
});

const imapConfig = {
  imap: {
    user: 'karthavyasrivastava@gmail.com',
    password: 'hqbm jhzu njzl yjik', // Use the App Password you generated
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    authTimeout: 3000,
    tlsOptions: { rejectUnauthorized: false } // Add this line to ignore self-signed certificate
  }
};

router.post('/register', async (req, res) => {
  console.log(req.body);
  const { fname, lname, email, subject } = req.body;

  if (!fname || !lname || !email || !subject) {
    return res.status(401).json({ status: 401, error: "Please fill the required fields" });
  }

  try {
    // Check if the user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      // Update existing user
      existingUser.fname = fname;
      existingUser.lname = lname;
      existingUser.subject = subject;
      await existingUser.save();

      // Send response indicating the email already exists
      return res.status(200).json({ status: 200, message: "Email already registered, details updated successfully" });
    } else {
      // Save new user
      const newUser = new users({ fname, lname, email, subject });
      await newUser.save();

      // Send confirmation email
      const mailOptions = {
        from: 'karthavyasrivastava@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: `Hello ${fname},\n\nThank you for registering.\n\nBest regards,\nYour Team`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ status: 500, error: "Failed to send confirmation email" });
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(201).json({ status: 201, message: "User registered successfully" });
        }
      });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ status: 500, error: "Internal server error" });
  }
});

// Function to check for new emails
const checkEmails = async () => {
  try {
    const connection = await imap.connect(imapConfig);
    await connection.openBox('INBOX');

    const searchCriteria = ['UNSEEN'];
    const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: true };

    const messages = await connection.search(searchCriteria, fetchOptions);

    messages.forEach(message => {
      const all = imap.getParts(message.attributes.struct);
      if (all && all.length) {
        const parts = all.filter(part => part.disposition && part.disposition.type.toUpperCase() === 'ATTACHMENT');

        parts.forEach(part => {
          const partData = part.body;
          console.log('Email received:', partData);
        });
      } else {
        console.error('No parts found in message:', message);
      }
    });

    connection.end();
  } catch (error) {
    console.error('Error checking emails:', error);
  }
};

// Check for new emails every minute
setInterval(checkEmails, 60000);

module.exports = router;