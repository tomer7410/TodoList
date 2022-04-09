
import { createApp } from "./app";
import { APP_PORT, APP_ORIGIN } from "./config";
import {connectDB} from './mongoose/mongoose'
const app = createApp();
connectDB();
app.listen(APP_PORT, () => console.log(APP_ORIGIN));
