import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable('time_activity_reports', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
    table
      .uuid('task_id')
      .references('id')
      .inTable('tasks')
      .onDelete('SET NULL');
    table
      .uuid('subtask_id')
      .references('id')
      .inTable('subtasks')
      .onDelete('SET NULL');
    table
      .uuid('client_id')
      .references('id')
      .inTable('clients')
      .onDelete('SET NULL');
    table.string('focal_point').nullable();
    table.date('date').notNullable();
    table.decimal('hours', 5, 2).notNullable();
    table.text('notes').nullable();
    table
      .enum('status', ['submitted', 'approved', 'rejected', 'pending'])
      .defaultTo('pending');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('time_activity_reports');
}
