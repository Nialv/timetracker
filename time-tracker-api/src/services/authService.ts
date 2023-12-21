import { MOCK_USERS } from '../models/userModel';
import { AuthResponse } from '../types/AuthResponse';
import { generateToken } from '../utils/jwtUtils';
import bcrypt from 'bcryptjs';

export const authenticateUser = async (
  username: string,
  password: string
): Promise<AuthResponse | null> => {
  const user = MOCK_USERS.find(user => user.username === username);
  if (user && (await bcrypt.compare(password, user.password))) {
    return { token: generateToken(user.id), userId: user.id };
  }
  return null;
};
