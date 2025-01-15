// const express = require('express');
// const router = new express.Router();
// const users = require('../models/userschema');
// const nodemailer =require('nodemailer');

// const transporter = nodemailer.createTransport({
// service: 'gmail',
// auth:{
//     user:'karthavyasrivastava@gmail.com',
//     pass:'Karthavya@2345'
//    }
// });

// router.post('/register', async (req, res) => {
//     console.log(req.body);
//     const{fname,lname,email,subject}=req.body;

//     if (!fname || !lname || !email || !subject) {
//         res.status(401).json({status:401,error:"Please fill the required fields"});
//     }

//     try{
//         const preuser = await users.findOne({email:email});

//         if(preuser){
//             const userMessage = await preuser.Messagesave(message);
//             console.log(userMessage);
//             const mailOptions={
//                 from:"karthavyasrivastava@gmail",
//                 to:email,
//                 subject:"sending email using nodejs",
//                 text:"Thank you for registering with us"
//             }

            

//             transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log('Email sent: ' + info.response);
//                     res.status(201).json({status:201,message:"Registration Successful"});
//                 }
//             });
            
//         }else{
//             const finalUser = new users ({
//                 fname:fname,
//                 lname:lname,
//                 email:email,
//                 subjects:{subject:subject}
//             });
//             const storeData = await finalUser.save();

//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "sending email using nodejs",
//                 text: "Your Response Has Been Submitted"
//             }

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email sent SUccesfully" })
//                 }
//             });
//             res.status(201).json({ status: 201, storeData })
//         }

        
//     }catch(error){
//         res.status(401).json({status:401,error:"Please fill the required fields"});
//         console.log("catch error")
//     }
// });

// module.exports =router;

// const express = require('express');
// const router = new express.Router();
// const users = require('../models/userschema');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'karthavyasrivastava@gmail.com',
//     pass: 'hqbm jhzu njzl yjik' // Use the App Password you generated
//   }
// });

// router.post('/register', async (req, res) => {
//   console.log(req.body);
//   const { fname, lname, email, subject } = req.body;

//   if (!fname || !lname || !email || !subject) {
//     return res.status(401).json({ status: 401, error: "Please fill the required fields" });
//   }

//   try {
//     // Check if the user already exists
//     const existingUser = await users.findOne({ email });
//     if (existingUser) {
//       // Update existing user
//       existingUser.fname = fname;
//       existingUser.lname = lname;
//       existingUser.subject = subject;
//       await existingUser.save();

//       // Send response indicating the email already exists
//       return res.status(200).json({ status: 200, message: "Email already registered, details updated successfully" });
//     } else {
//       // Save new user
//       const newUser = new users({ fname, lname, email, subject });
//       await newUser.save();

//       // Send confirmation email
//       const mailOptions = {
//         from: 'karthavyasrivastava@gmail.com',
//         to: email,
//         subject: 'Registration Successful',
//         text: `Hello ${fname},\n\nThank you for registering.\n\nBest regards,\nYour Team`
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("Error sending email:", error);
//           return res.status(500).json({ status: 500, error: "Failed to send confirmation email" });
//         } else {
//           console.log('Email sent: ' + info.response);
//           return res.status(201).json({ status: 201, message: "User registered successfully" });
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Error registering user:", error);
//     return res.status(500).json({ status: 500, error: "Internal server error" });
//   }
// });

// module.exports = router;
const express = require('express');
const router = new express.Router();
const users = require('../models/userschema');
const nodemailer = require('nodemailer');
const imaps = require('imap-simple');

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
    const connection = await imaps.connect(imapConfig);
    await connection.openBox('INBOX');

    const searchCriteria = ['UNSEEN'];
    const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: true };

    const messages = await connection.search(searchCriteria, fetchOptions);

    messages.forEach(message => {
      const all = imaps.getParts(message.attributes.struct);
      const parts = all.filter(part => part.disposition && part.disposition.type.toUpperCase() === 'ATTACHMENT');

      parts.forEach(part => {
        const partData = part.body;
        console.log('Email received:', partData);
      });
    });

    connection.end();
  } catch (error) {
    console.error('Error checking emails:', error);
  }
};

// Check for new emails every minute
setInterval(checkEmails, 600);

module.exports = router;