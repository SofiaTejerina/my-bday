// import responseController from '../controllers/responseController.js';
import { Router } from 'express';

const router = Router();
// router.put('/', responseController.setResponse);
router.get('/', (req, res) => {
            res.send('<h1>Hello, Express.js Server!</h1>');
        });

export default router;
