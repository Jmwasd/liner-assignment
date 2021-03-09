import {Router } from 'express';
import { create, read, update, deletes } from '../controllers/crud/index.controller';

const router = Router();

router.post('/create', create);
router.post('/read', read);
router.post('/update', update);
router.post('/delete', deletes);

export default router;



