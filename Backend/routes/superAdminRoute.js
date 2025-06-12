import express from "express";
import {
  loginSuperAdmin,
  forgotPassword,
  resetPassword,
  getCompanyFormFields,
  saveCompanyFormFields,
  getSingleCompany,
  setApprovalConfig,
  updateStaticFieldConfig,
  getAllCompanies,
  updateCompanyById,
  updateCompany,
  deleteCompany,
  toggleCompanyStatus,
  getAdminsByCompanyId,
  getAllAdmins,
  deleteAdmin,
} from "../controllers/superAdminController.js";

const router = express.Router();

router.post("/login", loginSuperAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/company-form-fields", getCompanyFormFields);
router.post("/company-form-fields", saveCompanyFormFields);
router.get('/companies', getAllCompanies);
router.post("/approval-config", setApprovalConfig);
router.patch('/company/static-config/:companyId', updateStaticFieldConfig);
router.get("/companies", getAllCompanies);
router.put("/updateCompany/:id", updateCompanyById);
// GET all companies
router.get("/companies", getAllCompanies);

// GET one company
router.get("/companies/:id", getSingleCompany);

// PUT update company
router.put("/companies/:id", updateCompany);

// DELETE company
router.delete("/companies/:id", deleteCompany);
router.put("/companies/:id/toggle-status", toggleCompanyStatus);
router.get('/companies/:companyId/admins', getAdminsByCompanyId);

router.get("/admins", getAllAdmins); // <-- Missing in your router
router.delete("/admin", deleteAdmin); // <- if not already there




export default router;


