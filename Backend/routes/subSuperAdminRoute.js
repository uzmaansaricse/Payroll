import express from 'express';
import { getlist, loginSubSuperAdmin, registerSubSuperAdmin } from '../controllers/subSuperAdminController.js';


const router = express.Router();

router.post('/register', registerSubSuperAdmin);
router.post('/login', loginSubSuperAdmin);
router.get('/getall',getlist);

export default router;
