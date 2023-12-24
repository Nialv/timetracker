import { Request, Response } from 'express';
import {
  createSubtask,
  removeSubtask,
  modifySubtask,
  findSubtaskById,
  findAllSubtasks
} from '../services/subtaskService';
import logger from '../utils/loggers';
import { Subtask } from '../types/Subtask';

export const findSubtasksController = async (req: Request, res: Response) => {
  try {
    const Subtasks = await findAllSubtasks();

    if (Subtasks.length === 0) {
      return res.status(404).json({ message: 'No active Subtasks found' });
    }

    return res.status(200).json(Subtasks);
  } catch (error) {
    logger.error('Error fetching active Subtasks:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createSubtaskController = async (req: Request, res: Response) => {
  try {
    const SubtaskData: Subtask = req.body;
    const createdSubtask = await createSubtask(SubtaskData);
    return res.status(201).json(createdSubtask);
  } catch (error) {
    console.error('Error creating Subtask:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const removeSubtaskController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedSubtask = await removeSubtask(id);

    if (!deletedSubtask) {
      return res.status(404).json({ message: 'Subtask not found' });
    }

    return res.status(200).json(deletedSubtask);
  } catch (error) {
    console.error('Error deleting Subtask:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const modifySubtaskController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, status, task_id } = req.body;
    const updatedSubtask = await modifySubtask(id, name, task_id, status);

    if (!updatedSubtask) {
      return res.status(404).json({ message: 'Subtask not found' });
    }

    return res.status(200).json(updatedSubtask);
  } catch (error) {
    console.error('Error updating Subtask:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findSubtaskByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const Subtask = await findSubtaskById(id);

    if (!Subtask) {
      return res.status(404).json({ message: 'Subtask not found' });
    }

    return res.status(200).json(Subtask);
  } catch (error) {
    console.error('Error fetching Subtask by name:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
