import SuperAdminModel from "../models/superAdminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendOTP from "../utils/sendOTP.js";
import Company from '../models/companyModel.js';


// Top of the file
import CompanyFormField from '../models/companyFormFieldModel.js';
import Admin from '../models/adminModel.js'; // or wherever your Admin model is

export const getAdminsByCompanyId = async (req, res) => {
  try {
    const { companyId } = req.params;

    const admins = await Admin.find({ companyId });

    if (!admins || admins.length === 0) {
      return res.status(404).json({ message: 'No admins found for this company.' });
    }

    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins', error: error.message });
  }
};




// 🔐 Login - Now uses DB password instead of .env
export const loginSuperAdmin = async (req, res) => {
  const { email, password } = req.body;

  // Check if email matches the one from .env
  if (email !== process.env.SUPERADMIN_EMAIL) {
    return res.status(401).json({ message: "Invalid email" });
  }

  // Find Super Admin in DB
  const admin = await SuperAdminModel.findOne({ email });
  if (!admin) {
    return res.status(404).json({ message: "Super Admin not found" });
  }

  // Compare provided password with hashed password
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Generate JWT
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ token });
};

// 🔁 Forgot Password (Send OTP)
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // Check email
  if (email !== process.env.SUPERADMIN_EMAIL) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  const admin = await SuperAdminModel.findOne({ email });
  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  await SuperAdminModel.updateOne({ email }, { otp, otpExpiry: expiry });

  await sendOTP(email, otp);

  res.status(200).json({ message: "OTP sent to your email." });
};

// 🔁 Reset Password (With OTP)
export const resetPassword = async (req, res) => {
  const { otp, newPassword, confirmPassword } = req.body;
  const email = process.env.SUPERADMIN_EMAIL;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const admin = await SuperAdminModel.findOne({ email });
  if (!admin || admin.otp !== otp || admin.otpExpiry < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await SuperAdminModel.updateOne(
    { email },
    {
      password: hashedPassword,
      otp: null,
      otpExpiry: null,
      passwordLastUpdated: new Date(),
    }
  );

  res.status(200).json({ message: "Password reset successful" });
};



// GET all form fields
export const getCompanyFormFields = async (req, res) => {
  try {
    const config = await CompanyFormField.findOne();
    if (!config) return res.status(200).json({ fields: [] });
    res.status(200).json(config);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// SAVE / UPDATE form fields
export const saveCompanyFormFields = async (req, res) => {
  try {
    const { fields } = req.body;
    let config = await CompanyFormField.findOne();
    if (!config) {
      config = new CompanyFormField({ fields });
    } else {
      config.fields = fields;
    }
    await config.save();
    res.status(200).json({ message: "Fields saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving fields" });
  }
};



export const setApprovalConfig = async (req, res) => {
  try {
    const { companyId, approvals } = req.body;

    if (!companyId || !approvals) {
      return res.status(400).json({ message: "companyId and approvals are required." });
    }

    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      { approvalConfig: approvals },
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found." });
    }

    res.status(200).json({ message: "Approval configuration saved successfully." });
  } catch (err) {
    console.error("Error saving approval config:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};




export const updateStaticFieldConfig = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { removedFields, optionalFields } = req.body;

    if (!companyId) {
      return res.status(400).json({ message: "Company ID is required." });
    }

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found." });
    }

    company.removedStaticFields = removedFields || [];
    company.nonRequiredFields = optionalFields || [];

    await company.save();

    res.status(200).json({ message: "Static field config updated successfully." });
  } catch (err) {
    console.error("Error updating field config:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};






export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies" });
  }
};

export const updateCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCompany = await Company.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: "Error updating company" });
  }
};
export const getSingleCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateCompany = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const company = await Company.findByIdAndUpdate(id, updatedData, { new: true });
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json({ message: "Company updated", company });
  } catch (error) {
    res.status(500).json({ message: "Error updating company" });
  }
};

export const deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Company.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Company not found" });
    res.json({ message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting company" });
  }
};
export const toggleCompanyStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id);
    if (!company) return res.status(404).json({ message: "Company not found" });

    company.status = company.status === "Active" ? "Inactive" : "Active";
    await company.save();

    res.json({ message: `Company marked as ${company.status}` });
  } catch (err) {
    res.status(500).json({ message: "Error toggling status" });
  }
};




export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password -__v");
    res.status(200).json(admins);
  } catch (error) {
    console.error("Error fetching admins:", error);
    res.status(500).json({ message: "Failed to fetch admins" });
  }
};
export const deleteAdmin = async (req, res) => {
  const { adminEmail } = req.body;

  try {
    const deleted = await Admin.findOneAndDelete({ email: adminEmail });

    if (!deleted) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    res.status(500).json({ message: "Failed to delete admin" });
  }
};
