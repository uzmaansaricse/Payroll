import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // Ensure environment variables are loaded

// ✅ Check environment variables
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS);

// ✅ Create transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ OTP sender
export const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Password Reset",
    text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully to", email);
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};

// ✅ Admin credential sender
export const sendAdminCredentials = async (email, loginEmail, tempPassword, companyId) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "MASU Admin Account Credentials",
    text: `
🎉 Your admin account has been created!

🔐 Login Email: ${loginEmail}
🔑 Temporary Password: ${tempPassword}
🏢 Company ID: ${companyId}

Please login and change your password immediately.
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Admin credentials sent to HR:", email);
  } catch (error) {
    console.error("Error sending admin credentials:", error);
  }
};


export default sendOTP;
