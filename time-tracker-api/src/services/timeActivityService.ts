import * as TimeActivityModel from '../models/timeActivityModel';
import { TimeActivity } from '../types/TimeActivity';
import logger from '../utils/loggers';

// Create time activity
export const createTimeActivity = async (timeActivity: TimeActivity) => {
  const insertedTimeActivity = await TimeActivityModel.insertTimeActivityReport(
    timeActivity
  );
  return insertedTimeActivity;
};

// Delete a timeActivity by ID.
export const removeTimeActivity = async (id: string) => {
  const deletedTimeActivity = await TimeActivityModel.deleteTimeActivityReport(
    id
  );
  return deletedTimeActivity;
};

// Update a time activity by ID.
export const modifyTimeActivity = async (
  id: string,
  user_id: string,
  task_id: string,
  subtask_id: string,
  client_id: string,
  focal_point: string,
  date: string,
  hours: number,
  notes: string,
  status: string
) => {
  const updatedTimeActivity = await TimeActivityModel.updateTimeActivityReport(
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
  return updatedTimeActivity;
};

// Get time activity by user.
export const findTimeActivityByUser = async (id: string) => {
  const timeActivity = await TimeActivityModel.getTimeActivityReportByUser(id);
  return timeActivity;
};

// Get all time activities by user
export const findAllTimeActivitysByUser = async (
  id: string
): Promise<TimeActivity[]> => {
  try {
    const timeActivities =
      await TimeActivityModel.getAllTimeActivityReportsByUser(id);
    return timeActivities;
  } catch (error) {
    logger.error('An error occurred while fetching timeActivitys:', error);
    throw error;
  }
};
