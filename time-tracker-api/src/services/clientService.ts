import * as ClientModel from '../models/clientsModel';
import { Client } from '../types/Client';
import logger from '../utils/loggers';

// Create a client
export const createClient = async (clientData: Client) => {
  const insertedClient = await ClientModel.insertClient(clientData);
  return insertedClient;
};

// Delete a client by ID.
export const removeClient = async (id: string) => {
  const deletedClient = await ClientModel.deleteClient(id);
  return deletedClient;
};

// Update a client by ID.
export const modifyClient = async (
  id: string,
  name: string,
  email: string,
  contact_person: string,
  phone_number: string,
  address: string,
  industry: string,
  status: boolean
) => {
  const updatedClient = await ClientModel.updateClient(
    id,
    name,
    email,
    contact_person,
    phone_number,
    address,
    industry,
    status
  );
  return updatedClient;
};

// Get a client by name.
export const findClientById = async (id: string) => {
  const client = await ClientModel.getClientById(id);
  return client;
};

// Get all clients
export const findAllClients = async (): Promise<Client[]> => {
  try {
    const clients = await ClientModel.getAllClients();
    return clients;
  } catch (error) {
    logger.error('An error occurred while fetching clients:', error);
    throw error;
  }
};
