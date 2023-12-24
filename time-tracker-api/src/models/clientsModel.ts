import { randomUUID } from 'crypto';
import db from '../database';
import { Client } from '../types/Client';

export async function getClientById(id: string): Promise<Client | null> {
  const client = await knexTableName().where({ id }).first();
  return client || null;
}

export const getAllClients = async (): Promise<Client[] | []> => {
  return knexTableName().select('*').where({ status: true });
};

export const insertClient = async (client: Client): Promise<Client> => {
  const [createdClient] = await knexTableName()
    .insert({ id: randomUUID(), ...client })
    .returning('*');

  return createdClient;
};

export async function updateClient(
  id: string,
  name: string,
  email: string,
  contact_person: string,
  phone_number: string,
  address: string,
  industry: string,
  status: boolean
): Promise<Client | null> {
  const updated_at = new Date();

  const [updatedClient] = await knexTableName()
    .where({ id })
    .update({
      name,
      email,
      contact_person,
      phone_number,
      address,
      industry,
      status,
      updated_at
    })
    .returning('*');

  return updatedClient || null;
}

export async function deleteClient(id: string): Promise<Client | null> {
  const deletedClient = await knexTableName()
    .where({ id })
    .del()
    .returning('*');

  return deletedClient[0] || null;
}

const knexTableName = () => {
  return db('clients');
};
