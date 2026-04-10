// import axios from "axios";
import OTP from "../models/otpModel.js";

export async function sendOtpService(email) {
  
  
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  
  
  await OTP.findOneAndUpdate(
    { email },
    { otp, createdAt: new Date() },
    { upsert: true }
  );

  const html = `
    <div style="font-family:sans-serif;">
      <h2>Your OTP is: ${otp}</h2>
      <p>This OTP is valid for 10 minutes.</p>
    </div>
  `;
  let subject= 'Verification Of StorageApp'

  try {
    

    
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: "StorageApp",
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email: email }],
      subject,
      htmlContent: html,
    }),
  });

   

    return { success: true, message: `OTP sent to ${email}` };
  } catch (error) {
    console.error("EMAIL ERROR:", error.response?.data || error.message);
    throw new Error("Email sending failed");
  }
}