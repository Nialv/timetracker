import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_clients', table => {
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
    table
      .uuid('client_id')
      .references('id')
      .inTable('clients')
      .onDelete('CASCADE');
    table.primary(['user_id', 'client_id']);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_clients');
}
