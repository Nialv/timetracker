import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot run seeds in production');
  }
  // Deletes ALL existing entries for cleanliness
  await knex('clients').del();

  await knex('clients').insert([
    {
      id: '47619e6a-b9cd-48bf-b2fa-9e25a4710907',
      name: 'Oowlish',
      email: 'oowlish@oowlish.com',
      contact_person: 'someone@oowlish.com',
      phone_number: '0000-0000',
      address: 'US',
      industry: 'Development Company',
      status: true
    }
    // ... more client entries ...
  ]);
}
