import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.ts';
import authRouter from './routes/auth.route.ts';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from './utils/error.ts';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string).then(() => console.log('Connected to MongoDB'));

// test route
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
