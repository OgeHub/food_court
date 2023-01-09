import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('addons').del();

  // Inserts seed entries
  await knex('addons').insert([
    {
      id: 1,
      name: 'Mango',
      description: 'Delicious fruit',
      price: 240,
      categoryName: 'Fruits',
    },
    {
      id: 2,
      name: 'Cake',
      description: 'Yummy',
      price: 500,
      categoryName: 'Snacks',
    },
    {
      id: 3,
      name: 'Ofe Akwu',
      description: 'Delicious soup',
      price: 800,
      categoryName: 'Soups',
    },
    {
      id: 4,
      name: 'Orange',
      description: 'Sweet fruit',
      price: 200,
      categoryName: 'Fruits',
    },
  ]);
}
