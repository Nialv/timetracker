import * as TaskModel from '../models/tasksModel';
import { Task } from '../types/Task';
import logger from '../utils/loggers';

// Create a task
export const createTask = async (taskData: Task) => {
    const insertedTask = await TaskModel.insertTask(taskData);
    return insertedTask;
};

// Delete a task by ID.
export const removeTask = async (id: string) => {
  const deletedTask = await TaskModel.deleteTask(id);
  return deletedTask;
};

// Update a task by ID.
export const modifyTask = async (id: string, name: string, status: boolean) => {
  const updatedTask = await TaskModel.updateTask(id, name, status);
  return updatedTask;
};

// Get a task by name.
export const findTaskById = async (id: string) => {
  const task = await TaskModel.getTaskById(id);
  return task;
};

// Get all tasks
export const findAllTasks = async (): Promise<Task[]> => {
  try {
    const tasks = await TaskModel.getAllTasks();
    return tasks;
  } catch (error) {
    logger.error('An error occurred while fetching tasks:', error);
    throw error;
  }
};
