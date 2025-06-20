import Admin from "../models/adminModel.js";
import Company from "../models/companyModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendOTP from "../utils/sendOTP.js";

// 🔐 Admin Signup
export const signupAdmin = async (req, res) => {
  try {
    const { name, phone, email, accessCode, companyId, password } = req.body;

    const company = await Company.findOne({ companyId, adminAccessCode: accessCode });
    if (!company) return res.status(400).json({ message: "Invalid company ID or access code" });

    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: "Admin already exists with this email" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      phone,
      email,
      accessCode,
      companyId,
      password: hashedPassword,
      status: "active",
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔑 Admin Login
export const loginAdmin = async (req, res) => {
  try {
   
    const { email, password,  accessCode } = req.body;
    const admin = await Admin.findOne({ email});
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

    const companyId = admin.companyId;
    // Get company permissions (assuming permissions are stored in Company)
    const company = await Company.findOne({ companyId });
    if (!company) return res.status(404).json({ message: "Company not found." });

    res.status(200).json({
      token,
      permissions: company.permissions
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// ❌ Delete Admin
export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Admin.findByIdAndDelete(id);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting admin" });
  }
};

// 🔃 Toggle Admin Status
export const toggleAdminStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    admin.status = admin.status === "active" ? "inactive" : "active";
    await admin.save();

    res.status(200).json({ message: `Admin status changed to ${admin.status}` });
  } catch (err) {
    res.status(500).json({ message: "Error toggling status" });
  }
};

// 📥 Get All Admins by Company
export const getAdminsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const admins = await Admin.find({ companyId });
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: "Error fetching admins" });
  }
};

// 🔁 Reset Admin Password (OTP-based)
export const resetAdminPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    if (admin.otp !== otp || admin.otpExpiry < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    admin.otp = null;
    admin.otpExpiry = null;
    await admin.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ message: "Error resetting password" });
  }
};

// (Optional) ➕ Add More Admins — reuse signup logic or create separate invite system
export const addMoreAdmins = async (req, res) => {
  try {
    // Add logic like signupAdmin
    res.status(501).json({ message: "Not implemented yet" });
  } catch (err) {
    res.status(500).json({ message: "Error adding admin" });
  }
};
