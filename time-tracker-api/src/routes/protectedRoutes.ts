import express from 'express';
import { verifyToken } from '../utils/jwtUtils';
import {
  createTaskController,
  findTaskByIdController,
  findTasksController,
  modifyTaskController,
  removeTaskController
} from '../controllers/taskController';
import {
  findSubtasksController,
  createSubtaskController,
  removeSubtaskController,
  modifySubtaskController,
  findSubtaskByIdController
} from '../controllers/subtaskController';
import {
  findClientsController,
  createClientController,
  removeClientController,
  modifyClientController,
  findClientByIdController
} from '../controllers/clientController';
import {
  createtimeActivityReport,
  removetimeActivityReport,
  modifytimeActivityReport,
  findtimeActivityReportByUser,
  findAlltimeActivityReportsByUser
} from '../controllers/timeActivityController';

const router = express.Router();

// Tasks
router.post('/tasks', verifyToken, createTaskController);
router.put('/tasks/:id', verifyToken, modifyTaskController);
router.get('/tasks', verifyToken, findTasksController);
router.get('/tasks/:id', verifyToken, findTaskByIdController);
router.delete('/tasks/:id', verifyToken, removeTaskController);

// Subtasks
router.post('/subtasks', verifyToken, createSubtaskController);
router.put('/subtasks/:id', verifyToken, modifySubtaskController);
router.get('/subtasks', verifyToken, findSubtasksController);
router.get('/subtasks/:id', verifyToken, findSubtaskByIdController);
router.delete('/subtasks/:id', verifyToken, removeSubtaskController);

// Clients
router.post('/clients', verifyToken, createClientController);
router.put('/clients/:id', verifyToken, modifyClientController);
router.get('/clients', verifyToken, findClientsController);
router.get('/clients/:id', verifyToken, findClientByIdController);
router.delete('/clients/:id', verifyToken, removeClientController);

// Time Activity Reports
router.post('/timeActivities', verifyToken, createtimeActivityReport);
router.put('/timeActivities/:id', verifyToken, modifytimeActivityReport);
router.get(
  '/timeActivities/:id/all',
  verifyToken,
  findAlltimeActivityReportsByUser
);
router.get('/timeActivities/:id', verifyToken, findtimeActivityReportByUser);
router.delete('/timeActivities/:id', verifyToken, removetimeActivityReport);

export default router;
