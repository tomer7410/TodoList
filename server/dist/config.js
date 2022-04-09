"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_OPTS = exports.APP_ORIGIN = exports.IN_PROD = exports.BCRYPT_SALT_ROUNDS = exports.APP_HOSTNAME = exports.APP_PORT = exports.SESSION_COOKIE = exports.APP_SECRET = exports.NODE_ENV = void 0;
const crypto = __importStar(require("crypto"));
const connectRedis = require('connect-redis');
const redis_1 = require("./db/redis");
const express_session_1 = __importDefault(require("express-session"));
const ONE_HOUR_IN_MS = 1_000 * 60 * 60;
const ONE_WEEK_IN_MS = 7 * 24 * ONE_HOUR_IN_MS;
_a = process.env, _b = _a.NODE_ENV, exports.NODE_ENV = _b === void 0 ? "development" : _b, _c = _a.APP_SECRET, exports.APP_SECRET = _c === void 0 ? crypto.randomBytes(32).toString('base64') : _c, _d = _a.SESSION_COOKIE, exports.SESSION_COOKIE = _d === void 0 ? "sid" : _d, _e = _a.APP_PORT, exports.APP_PORT = _e === void 0 ? 4000 : _e, _f = _a.APP_HOSTNAME, exports.APP_HOSTNAME = _f === void 0 ? "localhost" : _f;
exports.BCRYPT_SALT_ROUNDS = 12;
exports.IN_PROD = exports.NODE_ENV === "production";
const IN_DEV = exports.NODE_ENV === "development";
const APP_PROTOCOL = exports.IN_PROD ? "https" : "http";
const APP_HOST = `${exports.APP_HOSTNAME}${IN_DEV ? `:${exports.APP_PORT}` : ""}`;
exports.APP_ORIGIN = `${APP_PROTOCOL}://${APP_HOST}`;
const RedisStore = connectRedis(express_session_1.default);
exports.SESSION_OPTS = {
    store: new RedisStore({ client: redis_1.redisClient }),
    cookie: {
        httpOnly: true,
        maxAge: ONE_WEEK_IN_MS,
        sameSite: "strict",
        secure: exports.IN_PROD,
    },
    name: exports.SESSION_COOKIE,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    secret: exports.APP_SECRET,
};
//# sourceMappingURL=config.js.map