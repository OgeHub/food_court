import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('addonCategories', (table) => {
      table.increments();
      table.string('name').notNullable().unique();
      table.timestamps(true, true);
    })
    .createTable('addons', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('description');
      table.integer('price').notNullable();
      table
        .string('categoryName')
        .references('name')
        .inTable('addonCategories');
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('addonCategories')
    .dropTableIfExists('addons');
}
