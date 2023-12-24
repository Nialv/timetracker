export interface Client {
  id?: string;
  name: string;
  email: string;
  contact_person: string;
  phone_number?: string;
  address?: string;
  industry?: string;
  status: boolean;
}
