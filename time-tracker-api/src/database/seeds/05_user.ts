import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot run seeds in production');
  }

  await knex('users').del();

  await knex('users').insert([
    {
      id: 'e6d40667-4ac7-4583-a1d0-d65ea8817998',
      first_name: 'Ronnie',
      last_name: 'Bueso',
      phone_number: '+504 95430958',
      email: 'sronnieb@gmail.com',
      address: 'Tegucigalpa, Res. Santa Cruz B19 C18',
      position: 'Sr. Fullstack',
      country: 'Honduras',
      working_hours: 8,
      born_date: new Date('1992-02-21'),
      employment_type: 'full-time'
    }
  ]);
}
