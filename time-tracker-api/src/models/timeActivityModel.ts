import { randomUUID } from 'crypto';
import db from '../database';
import { TimeActivity } from '../types/TimeActivity';
import { getLastMonthDate } from '../utils/dateUtils';

export const getTimeActivityReportByUser = async (
  user_id: string
): Promise<TimeActivity[] | null> => {
  const timeActivityReport = await knexTableName()
    .where({ user_id })
    .andWhere('created_at', '>=', getLastMonthDate());
  return timeActivityReport || null;
};

export const getAllTimeActivityReportsByUser = async (
  user_id: string
): Promise<TimeActivity[] | []> => {
  const timeActivityReports = await knexTableName()
    .select(
      'time_activity_reports.*',
      'u.first_name as user_first_name',
      'u.last_name as user_last_name',
      't.name as task_name',
      'st.name as subtask_name',
      'c.name as client_name'
    )
    .leftJoin('users as u', 'time_activity_reports.user_id', 'u.id')
    .leftJoin('tasks as t', 'time_activity_reports.task_id', 't.id')
    .leftJoin('subtasks as st', 'time_activity_reports.subtask_id', 'st.id')
    .leftJoin('clients as c', 'time_activity_reports.client_id', 'c.id')
    .where({ user_id });

  return timeActivityReports || null;
};

export const insertTimeActivityReport = async (
  timeActivityReport: TimeActivity
): Promise<TimeActivity> => {
  const [createdTimeActivityReport] = await knexTableName()
    .insert({ id: randomUUID(), ...timeActivityReport })
    .returning('*');

  return createdTimeActivityReport;
};

export async function updateTimeActivityReport(
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
): Promise<TimeActivity | null> {
  const updated_at = new Date();

  const [updatedTimeActivityReport] = await knexTableName()
    .where({ id })
    .update({
      user_id,
      task_id,
      subtask_id,
      client_id,
      focal_point,
      date,
      hours,
      notes,
      status,
      updated_at
    })
    .returning('*');

  return updatedTimeActivityReport || null;
}

export async function deleteTimeActivityReport(
  id: string
): Promise<TimeActivity | null> {
  const deletedTimeActivityReport = await knexTableName()
    .where({ id })
    .del()
    .returning('*');

  return deletedTimeActivityReport[0] || null;
}

function knexTableName() {
  return db('time_activity_reports');
}
