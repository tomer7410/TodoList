import { SessionOptions } from "express-session";
import * as crypto from "crypto";
// const connectRedis = require('connect-redis');
import  {redisClient} from './db/redis'
import session from "express-session";
let RedisStore = require("connect-redis")(session)


const ONE_HOUR_IN_MS = 1_000 * 60 * 60;
const ONE_WEEK_IN_MS = 7 * 24 * ONE_HOUR_IN_MS;

export const{
    NODE_ENV = "development",
    APP_SECRET = crypto.randomBytes(32).toString('base64'), // crypto.randomBytes(32).toString('base64')
    SESSION_COOKIE = "sid",
    APP_PORT = 4000,
    APP_HOSTNAME = "localhost",
}=process.env 

//APP
export const BCRYPT_SALT_ROUNDS = 12;
export const IN_PROD = NODE_ENV === "production";
const IN_DEV = NODE_ENV === "development";
const APP_PROTOCOL = IN_PROD ? "https" : "http";
const APP_HOST = `${APP_HOSTNAME}${IN_DEV ? `:${APP_PORT}` : ""}`;
export const APP_ORIGIN = `${APP_PROTOCOL}://${APP_HOST}`;
///
 redisClient.connect().then(()=>{"connected to redis"})
console.log("connected to redis"); 
export const SESSION_OPTS: SessionOptions = {
   store: new RedisStore({ client: redisClient }),
    cookie: {
      // domain, // current domain (Same-Origin, no CORS)
      httpOnly: true,
      maxAge: 3000,
      sameSite: "strict",
      secure: IN_PROD,
    },
    name: SESSION_COOKIE,
    resave: false, // whether to save the session if it wasn't modified during the request
    rolling: true, // whether to (re-)set cookie on every response
    saveUninitialized: false, // whether to save empty sessions to the store
    secret: APP_SECRET,
  };
  export const a=()=>{
    redisClient.get("*", function (err:any, res:any) {
      console.log("get: ", res);
    });
  }
