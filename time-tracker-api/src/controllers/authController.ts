import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { authenticateUser } from '../services/authService';
import { JwtPayloadWithUserId } from '../types/Express';
import logger from '../utils/loggers';
import { generateToken } from '../utils/jwtUtils';

const REFRESH_SECRET_KEY = process.env.TIME_TRACKER_REFRESH_KEY as string;

// Login Functionality.
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const authResponse = await authenticateUser(username, password);

    if (authResponse) {
      res.json({ token: authResponse?.token, userId: authResponse?.userId });
    } else {
      res.status(401).send('Authentication failed');
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Login error: ${error?.message}`);
    }
    res.status(500).send('Internal Server Error');
  }
};

// Function to verify and refresh token (WIP)
export const refreshToken = (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).send('Refresh Token is required');
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      REFRESH_SECRET_KEY
    ) as JwtPayloadWithUserId;

    const newAccessToken = generateToken(decoded.userId);
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Refresh token error: ${error.message}`);
    }
    res.status(403).send('Invalid Refresh Token');
  }
};
