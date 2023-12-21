import express from 'express';
import { verifyToken } from '../utils/jwtUtils';

const router = express.Router();

router.get('/protected', verifyToken, (req, res) => {
  // Handle the protected route
  res.send('This is a protected route');
});

export default router;
