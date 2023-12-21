import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: string | jwt;
}

export type JwtPayloadWithUserId = {
  userId: string;
};
