const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(userName, guideTitle, comment, score) { //''name' 'email''

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: 'gaby.cabrera9@gmail.com', // generated ethereal user
      pass: process.env.GMAIL_PWD, // generated ethereal password
    }
  });

  // send mail with defined transport object
    try {
        let info = await transporter.sendMail({
            from: "'Gabriela Cabrera' <gaby.cabrera9@gmail.com>", // sender address
            to: 'gaby.cabrera9@gmail.com', // list of receivers
            subject: "Received Bad Review on Breadcrumbs", // Subject line
            html: `<p>${userName} just commented on <strong>${guideTitle}<strong>.</p><br><p>${comment}.</p><br><p>${score} pts.</p>`, // html body
        })

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    } catch (err){
        console.log(err);
    }
}

module.exports = sendMail;