import express from 'express';
import { registerCompany } from '../controllers/companyController.js';

const router = express.Router();

// POST: Register new company
router.post('/register', registerCompany);

export default router;
