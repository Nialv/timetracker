import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot run seeds in production');
  }
  // Deletes ALL existing entries for cleanliness
  await knex('users_auth').del();

  await knex('users_auth').insert([
    {
      username: 'ronnie',
      email: 'sronnieb@example.com',
      password: '$2a$10$vnQwfQshtWzy8p0OOrB2te./jcHXNya7Q0AxvrPvH0BUf.sQ1UyWO',
      status: true
    },
    {
      username: 'erick',
      email: 'erick@example.com',
      password: '$2a$10$vnQwfQshtWzy8p0OOrB2te./jcHXNya7Q0AxvrPvH0BUf.sQ1UyWO',
      status: false
    }
    // ... more user entries ...
  ]);
}
