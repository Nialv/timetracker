import { Request, Response } from 'express';
import {
  createTask,
  removeTask,
  modifyTask,
  findTaskById,
  findAllTasks
} from '../services/taskService';
import logger from '../utils/loggers';
import { Task } from '../types/Task';

export const findTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await findAllTasks();

    if (tasks.length === 0) {
      return res.status(404).json({ message: 'No active tasks found' });
    }

    return res.status(200).json(tasks);
  } catch (error) {
    logger.error('Error fetching active tasks:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const taskData: Task = req.body;
    const createdTask = await createTask(taskData);
    return res.status(201).json(createdTask);
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const removeTaskController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedTask = await removeTask(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(deletedTask);
  } catch (error) {
    console.error('Error deleting task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const modifyTaskController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, status } = req.body;
    const updatedTask = await modifyTask(id, name, status);

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findTaskByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await findTaskById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error('Error fetching task by name:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
