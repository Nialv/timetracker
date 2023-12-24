import { randomUUID } from 'crypto';
import db from '../database';
import { Task } from '../types/Task';

export async function getTaskById(id: string): Promise<Task | null> {
  const task = await knexTableName().where({ id }).first();
  return task || null;
}

export const getAllTasks = async (): Promise<Task[] | []> => {
  return knexTableName().select('id', 'name').where({ status: true });
};

export const insertTask = async (task: Task): Promise<Task> => {
  const [createdTask] = await knexTableName()
    .insert({ id: randomUUID(), ...task })
    .returning('*');

  return createdTask;
};

export async function updateTask(
  id: string,
  name: string,
  status: boolean
): Promise<Task | null> {
  const updated_at = new Date();

  const [updatedTask] = await knexTableName()
    .where({ id })
    .update({ name, status, updated_at })
    .returning('*');

  return updatedTask || null;
}

export async function deleteTask(id: string): Promise<Task | null> {
  const deletedTask = await knexTableName().where({ id }).del().returning('*');

  return deletedTask[0] || null;
}

const knexTableName = () => {
  return db('tasks');
};
