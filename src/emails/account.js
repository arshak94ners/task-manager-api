const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "arshak94nersisyan@gmail.com",
    subject: "Thanks for joining in.",
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    // we can use key value here as well
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "arshak94nersisyan@gmail.com",
    subject: "Sorry to see you go.",
    text: `Goodbye ${name}. I hope to see you back soon.`
    // we can use key value here as well
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
