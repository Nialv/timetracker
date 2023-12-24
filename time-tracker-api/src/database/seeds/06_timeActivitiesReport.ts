import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot run seeds in production');
  }

  await knex('time_activity_reports').del();

  await knex('time_activity_reports').insert([
    {
      id: 'c84ee4ed-0c59-47e2-8eb3-cb83bdb7485a',
      user_id: 'e6d40667-4ac7-4583-a1d0-d65ea8817998',
      task_id: '4b682a4b-7c6a-4e3a-8533-0e9c414f54bf',
      subtask_id: '2bd839e7-2afd-415e-bfdc-bb7779b5265a',
      client_id: '47619e6a-b9cd-48bf-b2fa-9e25a4710907',
      focal_point: 'Agustin',
      date: new Date().toISOString(),
      hours: 9,
      notes: 'My First record, hopefully all good well with oowlish. :)',
      status: 'pending'
    }
  ]);
}
