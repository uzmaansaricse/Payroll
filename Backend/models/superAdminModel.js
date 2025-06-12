import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: String,
  otpExpiry: Date,
  passwordLastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const SuperAdminModel = mongoose.model("SuperAdmin", superAdminSchema);
export default SuperAdminModel;
