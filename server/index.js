const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");
const emailTemplate = require("./exampleEmail.js");

const PORT = 8080;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

async function sendEmail(data) {
  const { subscriber, username } = data;

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"NOTHS" <noths@example.com>`, // sender address
    to: `${subscriber.username}, baz@example.com`, // list of receivers
    subject: `${username}'s birthday is just a week away`, // Subject line
    text: `${username}'s birthday is just a week away`, // plain text body
    html: emailTemplate(subscriber, username), // html bodyh
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

app.post("/spam-my-friends", async (req, res, next) => {
  console.log("Sending message now...");
  try {
    await sendEmail(req.body);
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
});

app.listen(PORT, () => console.log("Server is running!"));
