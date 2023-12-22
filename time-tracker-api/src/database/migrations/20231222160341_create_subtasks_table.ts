import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable('subtasks', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.boolean('status').notNullable().defaultTo(false);
    table.uuid('task_id').references('id').inTable('tasks').onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('subtasks');
}
