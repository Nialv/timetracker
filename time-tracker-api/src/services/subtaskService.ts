import * as SubtaskModel from '../models/subtasksModel';
import { Subtask } from '../types/Subtask';
import logger from '../utils/loggers';

// Create a subtask
export const createSubtask = async (subtaskData: Subtask) => {
  const insertedSubtask = await SubtaskModel.insertSubtask(subtaskData);
  return insertedSubtask;
};

// Delete a subtask by ID.
export const removeSubtask = async (id: string) => {
  const deletedSubtask = await SubtaskModel.deleteSubtask(id);
  return deletedSubtask;
};

// Update a subtask by ID.
export const modifySubtask = async (
  id: string,
  name: string,
  task_id: string,
  status: boolean
) => {
  const updatedSubtask = await SubtaskModel.updateSubtask(
    id,
    name,
    task_id,
    status
  );
  return updatedSubtask;
};

// Get a subtask by name.
export const findSubtaskById = async (id: string) => {
  const subtask = await SubtaskModel.getSubtaskById(id);
  return subtask;
};

// Get all subtasks
export const findAllSubtasks = async (): Promise<Subtask[]> => {
  try {
    const subtasks = await SubtaskModel.getAllSubtasks();
    return subtasks;
  } catch (error) {
    logger.error('An error occurred while fetching subtasks:', error);
    throw error;
  }
};
