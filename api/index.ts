import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.ts';
import authRouter from './routes/auth.route.ts';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string).then(() => console.log('Connected to MongoDB'));

// test route
app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
