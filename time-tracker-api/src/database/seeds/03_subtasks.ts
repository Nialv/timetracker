import { randomUUID } from 'crypto';
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot run seeds in production');
  }
  
  await knex('subtasks').del();

  // Inserts seed entries
  await knex('subtasks').insert([
    // Subtasks for "Planning and Analysis"
    {
      id: randomUUID(),
      name: 'Requirement Gathering',
      status: true,
      task_id: '8d8800f0-53e7-4e56-a2d5-090baa26ad60'
    },
    {
      id: randomUUID(),
      name: 'Feasibility Study',
      status: true,
      task_id: '8d8800f0-53e7-4e56-a2d5-090baa26ad60'
    },
    {
      id: randomUUID(),
      name: 'Project Specification',
      status: true,
      task_id: '8d8800f0-53e7-4e56-a2d5-090baa26ad60'
    },

    // Subtasks for "Design"
    {
      id: randomUUID(),
      name: 'Architecture Design',
      status: true,
      task_id: 'ab32e7b9-d1e7-492d-b2f1-82bb67170a11'
    },
    { id: randomUUID(), name: 'UI/UX Design', status: true, task_id: 'ab32e7b9-d1e7-492d-b2f1-82bb67170a11' },
    {
      id: randomUUID(),
      name: 'Database Design',
      status: true,
      task_id: 'ab32e7b9-d1e7-492d-b2f1-82bb67170a11'
    },

    // Subtasks for "Development"
    { id: randomUUID(), name: 'Coding', status: true, task_id: '4b682a4b-7c6a-4e3a-8533-0e9c414f54bf' },
    {
      id: '2bd839e7-2afd-415e-bfdc-bb7779b5265a',
      name: 'API Development',
      status: true,
      task_id: '4b682a4b-7c6a-4e3a-8533-0e9c414f54bf'
    },
    {
      id: randomUUID(),
      name: 'Version Control',
      status: true,
      task_id: '4b682a4b-7c6a-4e3a-8533-0e9c414f54bf'
    },

    // Subtasks for "Testing"
    { id: randomUUID(), name: 'Unit Testing', status: true, task_id: '118a5f52-8667-48e0-b248-8e3e36aaec5b' },
    {
      id: randomUUID(),
      name: 'Integration Testing',
      status: true,
      task_id: '118a5f52-8667-48e0-b248-8e3e36aaec5b'
    },
    { id: randomUUID(), name: 'System Testing', status: true, task_id: '118a5f52-8667-48e0-b248-8e3e36aaec5b' },
    {
      id: randomUUID(),
      name: 'Performance Testing',
      status: true,
      task_id: '118a5f52-8667-48e0-b248-8e3e36aaec5b'
    },

    // Subtasks for "Deployment"
    {
      id: randomUUID(),
      name: 'Deployment Planning',
      status: true,
      task_id: 'e3dd6d17-0981-4fd9-903c-f3949949d909'
    },
    {
      id: randomUUID(),
      name: 'Containerization/Virtualization',
      status: true,
      task_id: 'e3dd6d17-0981-4fd9-903c-f3949949d909'
    },
    { id: randomUUID(), name: 'CI/CD', status: true, task_id: 'e3dd6d17-0981-4fd9-903c-f3949949d909' },

    // Subtasks for "Maintenance and Monitoring"
    { id: randomUUID(), name: 'Bug Fixing', status: true, task_id: '9ac6f6ac-2630-4634-9bf9-a896be803162' },
    {
      id: randomUUID(),
      name: 'Performance Optimization',
      status: true,
      task_id: '9ac6f6ac-2630-4634-9bf9-a896be803162'
    },
    { id: randomUUID(), name: 'Monitoring', status: true, task_id: '9ac6f6ac-2630-4634-9bf9-a896be803162' },

    // Subtasks for "Documentation"
    {
      id: randomUUID(),
      name: 'Code Documentation',
      status: true,
      task_id: '9853ce5a-8259-4f82-aa9b-eb67d86dd6ea'
    },
    {
      id: randomUUID(),
      name: 'User Documentation',
      status: true,
      task_id: '9853ce5a-8259-4f82-aa9b-eb67d86dd6ea'
    },

    // Subtasks for "Collaboration and Review"
    { id: randomUUID(), name: 'Code Review', status: true, task_id: '635fa4df-b0b8-42b6-982d-930e8daf5f47' },
    { id: randomUUID(), name: 'Team Meetings', status: true, task_id: '635fa4df-b0b8-42b6-982d-930e8daf5f47' },
    {
      id: randomUUID(),
      name: 'Client Communication',
      status: true,
      task_id: '635fa4df-b0b8-42b6-982d-930e8daf5f47'
    },

    // Subtasks for "Continuous Learning and Adaptation"
    {
      id: randomUUID(),
      name: 'Learning New Technologies',
      status: true,
      task_id: '067873ec-17b5-49a0-82aa-14509d8bb09a'
    },
    { id: randomUUID(), name: 'Refactoring', status: true, task_id: '067873ec-17b5-49a0-82aa-14509d8bb09a' },

    // Subtasks for "Security"
    {
      id: randomUUID(),
      name: 'Security Audits',
      status: true,
      task_id: '16c31ec5-f9bd-4d41-912f-e0b8c121fd94'
    },
    {
      id: randomUUID(),
      name: 'Implementing Security Practices',
      status: true,
      task_id: '16c31ec5-f9bd-4d41-912f-e0b8c121fd94'
    }
  ]);
}
