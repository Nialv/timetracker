import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .uuid('boss_id')
      .references('id')
      .inTable('users')
      .onDelete('SET NULL')
      .nullable();
    table.string('first_name');
    table.string('last_name').nullable();
    table.string('phone_number');
    table.string('email');
    table.text('address').nullable();
    table.string('position').nullable();
    table.string('country');
    table.string('working_hours'); // Working hours (e.g., '8 hrs')
    table.integer('birth_year').nullable(); // Birth year
    table.enum('employment_type', ['full-time', 'part-time']);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
