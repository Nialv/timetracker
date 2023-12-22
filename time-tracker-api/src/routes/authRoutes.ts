import { Router } from 'express';
import { login } from '../controllers/authController';
import { refreshToken } from '../controllers/authController';

const router = Router();

router.post('/login', login);

router.post('/status', (req, res) => res.send({ msg: 'ok' }));

router.post('/refresh-token', refreshToken); // WIP

export default router;
