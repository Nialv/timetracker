import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('tasks').del();

  await knex('tasks').insert([
    { id: '8d8800f0-53e7-4e56-a2d5-090baa26ad60', name: 'Planning and Analysis', status: true },
    { id: 'ab32e7b9-d1e7-492d-b2f1-82bb67170a11', name: 'Design', status: true },
    { id: '4b682a4b-7c6a-4e3a-8533-0e9c414f54bf', name: 'Development', status: true },
    { id: '118a5f52-8667-48e0-b248-8e3e36aaec5b', name: 'Testing', status: true },
    { id: 'e3dd6d17-0981-4fd9-903c-f3949949d909', name: 'Deployment', status: true },
    { id: '9ac6f6ac-2630-4634-9bf9-a896be803162', name: 'Maintenance and Monitoring', status: true },
    { id: '9853ce5a-8259-4f82-aa9b-eb67d86dd6ea', name: 'Documentation', status: true },
    { id: '635fa4df-b0b8-42b6-982d-930e8daf5f47', name: 'Collaboration and Review', status: true },
    { id: '067873ec-17b5-49a0-82aa-14509d8bb09a', name: 'Continuous Learning and Adaptation', status: true },
    { id: '16c31ec5-f9bd-4d41-912f-e0b8c121fd94', name: 'Security', status: true }
  ]);
}
