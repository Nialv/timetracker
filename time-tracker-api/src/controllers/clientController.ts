import { Request, Response } from 'express';
import {
  createClient,
  removeClient,
  modifyClient,
  findClientById,
  findAllClients
} from '../services/clientService';
import logger from '../utils/loggers';
import { Client } from '../types/Client';

export const findClientsController = async (req: Request, res: Response) => {
  try {
    const Clients = await findAllClients();

    if (Clients.length === 0) {
      return res.status(404).json({ message: 'No active Clients found' });
    }

    return res.status(200).json(Clients);
  } catch (error) {
    logger.error('Error fetching active Clients:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createClientController = async (req: Request, res: Response) => {
  try {
    const ClientData: Client = req.body;
    const createdClient = await createClient(ClientData);
    return res.status(201).json(createdClient);
  } catch (error) {
    console.error('Error creating Client:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const removeClientController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedClient = await removeClient(id);

    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.status(200).json(deletedClient);
  } catch (error) {
    console.error('Error deleting Client:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const modifyClientController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const {
      name,
      email,
      contact_person,
      phone_number,
      address,
      industry,
      status
    } = req.body;
    const updatedClient = await modifyClient(
      id,
      name,
      email,
      contact_person,
      phone_number,
      address,
      industry,
      status
    );

    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.status(200).json(updatedClient);
  } catch (error) {
    console.error('Error updating Client:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findClientByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const Client = await findClientById(id);

    if (!Client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.status(200).json(Client);
  } catch (error) {
    console.error('Error fetching Client by name:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
