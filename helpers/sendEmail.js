import sgMail from "@sendgrid/mail";

export default async function sendMail(data) {
  const { SENDGRID_KEY } = process.env;
  sgMail.setApiKey(SENDGRID_KEY);

  const response = await sgMail.send({ ...data, from: "mikenovicov+sendgrid@gmail.com" });

  return response;
}

// const data = {
//   to: "mikenovicov+test@gmail.com",
//   from: "mikenovicov+sendgrid@gmail.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };


