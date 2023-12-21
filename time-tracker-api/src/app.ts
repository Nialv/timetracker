import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import 'express-async-errors';
import 'dotenv/config';

import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protectedRoutes';
import logger from './utils/loggers';

const app = express();

const corsOptions = {
  origin:  process.env.CORS_ORIGIN || 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

// Global error handling middleware
app.use((err: Error, req: Request, res: Response): void => {
  logger.error(`Unhandled error: ${err.message}`);
  res.status(500).send('Internal Server Error');
});

export default app;
