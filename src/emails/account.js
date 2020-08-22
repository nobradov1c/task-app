const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "obradovicnikola009@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "obradovicnikola009@gmail.com",
    subject: "Sorry to see you go!",
    text: `We are sorry to see you go, ${name}. If you experienced any inconveniences, please let us now so we can make our service better!`,
  });
};

module.exports = { sendWelcomeEmail, sendGoodbyeEmail };
