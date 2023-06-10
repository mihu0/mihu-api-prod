import express from 'express';
import { addMultipleCategories } from '../controllers/categoryController.js';
const router = express.Router();



router.post('/addCategories', addMultipleCategories);



export default router;