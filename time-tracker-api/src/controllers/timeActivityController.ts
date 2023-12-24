import { Request, Response } from 'express';
import {
  createTimeActivity,
  removeTimeActivity,
  modifyTimeActivity,
  findTimeActivityByUser,
  findAllTimeActivitysByUser
} from '../services/timeActivityService';
import logger from '../utils/loggers';
import { TimeActivity } from '../types/TimeActivity';

export const createtimeActivityReport = async (req: Request, res: Response) => {
  try {
    const timeActivityReportData: TimeActivity = req.body;
    const createdtimeActivityReport = await createTimeActivity(
      timeActivityReportData
    );
    return res.status(201).json(createdtimeActivityReport);
  } catch (error) {
    logger.error('Error creating time activity report:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const removetimeActivityReport = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedtimeActivityReport = await removeTimeActivity(id);

    if (!deletedtimeActivityReport) {
      return res
        .status(404)
        .json({ message: 'Time activity report not found' });
    }

    return res.status(200).json(deletedtimeActivityReport);
  } catch (error) {
    logger.error('Error deleting time activity report:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const modifytimeActivityReport = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const {
      user_id,
      task_id,
      subtask_id,
      client_id,
      focal_point,
      date,
      hours,
      notes,
      status
    } = req.body;

    const updatedtimeActivityReport = await modifyTimeActivity(
      id,
      user_id,
      task_id,
      subtask_id,
      client_id,
      focal_point,
      date,
      hours,
      notes,
      status
    );

    if (!updatedtimeActivityReport) {
      return res
        .status(404)
        .json({ message: 'Time activity report not found' });
    }

    return res.status(200).json(updatedtimeActivityReport);
  } catch (error) {
    logger.error('Error updating time activity report:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findtimeActivityReportByUser = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const timeActivityReport = await findTimeActivityByUser(id);

    if (!timeActivityReport) {
      return res.status(404).json({ message: 'Time activity report not found' });
    }

    return res.status(200).json(timeActivityReport);
  } catch (error) {
    logger.error('Error fetching time activity report by user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findAlltimeActivityReportsByUser = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const timeActivityReport = await findAllTimeActivitysByUser(id);

    if (!timeActivityReport) {
      return res.status(404).json({ message: 'timeActivityReports not found' });
    }

    return res.status(200).json(timeActivityReport);
  } catch (error) {
    logger.error('Error fetching all time activity report by user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
