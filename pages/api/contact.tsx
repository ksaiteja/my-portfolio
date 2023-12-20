import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "saitejakalva07@gmail.com",
      pass: "ttnc lrjc jsxn yewa",
    },
    secure: true,
  });
  const mailData = {
    from: "saitejakalva07@gmail.com",
    to: "saitejakalva@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err: Error | null, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
