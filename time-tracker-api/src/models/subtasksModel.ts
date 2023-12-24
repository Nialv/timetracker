import { randomUUID } from 'crypto';
import db from '../database';
import { Subtask } from '../types/Subtask';

export async function getSubtaskById(id: string): Promise<Subtask | null> {
  const subtask = await knexTableName().where({ id }).first();
  return subtask || null;
}

export const getAllSubtasks = async (): Promise<Subtask[] | []> => {
  return knexTableName()
    .select('subtasks.id', 'subtasks.name', 'subtasks.task_id', 'tasks.name as task_name')
      .join('tasks', 'subtasks.task_id', 'tasks.id')
      .where({ 'subtasks.status': true });
};

export const insertSubtask = async (subtask: Subtask): Promise<Subtask> => {
  const [createdSubtask] = await knexTableName()
    .insert({ id: randomUUID(), ...subtask })
    .returning('*');

  return createdSubtask;
};

export async function updateSubtask(
  id: string,
  name: string,
  task_id: string,
  status: boolean
): Promise<Subtask | null> {
  const updated_at = new Date();

  const [updatedSubtask] = await knexTableName()
    .where({ id })
    .update({ name, status, task_id, updated_at })
    .returning('*');

  return updatedSubtask || null;
}

export async function deleteSubtask(id: string): Promise<Subtask | null> {
  const deletedSubtask = await knexTableName()
    .where({ id })
    .del()
    .returning('*');

  return deletedSubtask[0] || null;
}

const knexTableName = () => {
  return db('subtasks');
};
