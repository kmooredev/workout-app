import { Request, Response } from 'express';

export const test = (_req: Request, res: Response) => {
  res.send('Hello World');
};
