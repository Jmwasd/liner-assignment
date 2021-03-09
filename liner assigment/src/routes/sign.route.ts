import {Router} from 'express';
import {login, resign, signup} from '../controllers/sign/index.controller';

const router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/resign', resign);

export default router