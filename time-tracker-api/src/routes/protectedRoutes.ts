import express from 'express';
import { verifyToken } from '../utils/jwtUtils';
import { createTaskController, findTaskByIdController, findTasksController, modifyTaskController, removeTaskController } from '../controllers/taskController';

const router = express.Router();

router.post('/tasks', verifyToken, createTaskController);
router.put('/tasks/:id', verifyToken, modifyTaskController);
router.get('/tasks', verifyToken, findTasksController);
router.get('/tasks/:id', verifyToken, findTaskByIdController);
router.delete('/tasks/:id', verifyToken, removeTaskController);

export default router;
