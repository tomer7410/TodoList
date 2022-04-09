import session from "express-session";
console.log("importedddddddddddddddddddddddd");

declare module "express-session" {
  export interface SessionData {
    userId?: number; // ID int
    confirmedAt: number; // timestamp in ms
  }
}
