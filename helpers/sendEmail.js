import sgMail from "@sendgrid/mail";

export default async function sendMail(data) {
  const { SENDGRID_KEY } = process.env;
  sgMail.setApiKey(SENDGRID_KEY);

  const response = await sgMail.send({ ...data, from: "mikenovicov+sendgrid@gmail.com", html: email });

  return response;
}

// const data = {
//   to: "mikenovicov+test@gmail.com",
//   from: "mikenovicov+sendgrid@gmail.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };


const email =  `<article style="background-color: lightgray; border-radius: 20px; padding : 25px; border: 3px solid white; box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; min-width: 100%; ">
                  <div style="background-color: #ffffff80; border-radius: 10px; padding : 25px;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; min-height: 600px;display: flex; flex-direction: column; justify-content: space-between;">
                    <h1 style="color: #252525; text-align: center; text-decoration: underline; margin-bottom: 30px">
                         ${title || "This is verification email"} 
                    </h1>
                    <p style="margin-bottom: 25px; font-size: 18px">
                        ${message || "Email sent for verification existing user"} 
                    </p>
                    <a href="https://nodejs-restapi-g9eb.onrender.com/user/verify/${token}" style="width: 100%; background-color: lightblue; padding: 15px 25px; border-radius: 4px; text-align: center; text-decoration: none; color: darkblue; font-size: 22px">
                        Click to verify user ${token}
                    </a>
                    <div style="width: 100% ;display: flex; align-items: center; gap:25px; justify-content: center">
                        <div style="height:3px; width:50px; background-color: gray"></div>
                          <p style="color:gray; text-align: center"> 
                                message sent from my api to verify 
                          </p>
                        <div style="height:3px; width:50px; background-color: gray"></div>
                    </div>
                 </div>
                </article>`;
