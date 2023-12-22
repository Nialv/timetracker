import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot run seeds in production');
  }
  // Deletes ALL existing entries for cleanliness
  await knex('users').del();

  await knex('users').insert([
    {
      username: 'ronnie',
      email: 'sronnieb@example.com',
      password: '$2a$10$vnQwfQshtWzy8p0OOrB2te./jcHXNya7Q0AxvrPvH0BUf.sQ1UyWO'
    },
    {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'hashed_password2'
    }
    // ... more user entries ...
  ]);
}
