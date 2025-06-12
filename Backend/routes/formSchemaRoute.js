import express from 'express';
import { getSchema, addField, deleteField } from '../controllers/formSchemaController.js';

const router = express.Router();

router.get('/', getSchema);          // Fetch schema
router.post('/add', addField);      // Add a field to a section
router.delete('/delete', deleteField); // Delete a field from a section

export default router;
