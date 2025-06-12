import express from "express";
import {
  signupAdmin,
  loginAdmin,
  deleteAdmin,
  resetAdminPassword,
  toggleAdminStatus,
  getAdminsByCompany,
  addMoreAdmins, // (Optional future)
} from "../controllers/adminController.js";

const router = express.Router();

// 🔐 Admin Signup/Login
router.post("/signup", signupAdmin);
router.post("/login", loginAdmin);

// 🔁 Password Reset (With OTP)
router.post("/reset-password", resetAdminPassword);

// 🔃 Toggle Admin Status (Active/Inactive)
router.put("/:id/toggle-status", toggleAdminStatus);

// 📥 Get All Admins Linked to a Company
router.get("/by-company/:companyId", getAdminsByCompany);

// ➕ (Optional) Add More Admins Later
router.post("/add", addMoreAdmins); // implement if needed

export default router;
