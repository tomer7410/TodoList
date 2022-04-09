import express, { Express, Request, Response } from 'express';
import session from "express-session";
import { errors } from "celebrate";
import { SESSION_OPTS } from "./config";
import {auth} from "./routes/auth";
import { notFound, serverError } from "./middleware";
import  cors from 'cors'
import {corsOptions} from './middleware'
import dotenv from 'dotenv';

import {seedDb} from './seeds/seed'
export const createApp = () => {
  const app = express();
  // app.options('*', cors()) 
 app.use(cors(corsOptions));
  
  app.use(session(SESSION_OPTS));
  app.use(express.json());

  app.use(
    auth, // login, logout, register
  );

  app.use(notFound);

  app.use(errors());

  app.use(serverError);

  return app;
};
// dotenv.config();

// const app: Express = express();
// const port =3000|| process.env.PORT;
// connectDB()
// // seedDb()
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });