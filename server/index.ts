import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {connectDB} from './mongoose/mongoose'
import {seedDb} from './seeds/seed'
dotenv.config();

const app: Express = express();
const port =3000|| process.env.PORT;
connectDB()
// seedDb()
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});