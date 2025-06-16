import express from 'express';
import { registerCompany, updateCompanyPermissions } from '../controllers/companyController.js';

const router = express.Router();

// POST: Register new company
router.post('/register', registerCompany);
router.post('/updatecompanypermissions', updateCompanyPermissions);

export default router;
