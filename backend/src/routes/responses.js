import responseController from '../controllers/responseController.js';
import { Router } from 'express';

const router = Router();
router.post('/', responseController.setResponse);

export default router;
