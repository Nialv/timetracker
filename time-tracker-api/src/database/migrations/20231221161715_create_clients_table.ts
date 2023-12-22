import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable('clients', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('contact_person').notNullable();
    table.string('phone_number').nullable();
    table.text('address').nullable();
    table.string('industry').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('clients');
}
