import { compare, hash } from "bcrypt";
import { createHash } from "crypto";
import {  BCRYPT_SALT_ROUNDS} from "../config";
export const comparePassword = (plaintextPassword: string, hash: string) =>
  compare(sha256(plaintextPassword), hash);

export const hashPassword = (plaintextPassword: string) =>
  hash(sha256(plaintextPassword), BCRYPT_SALT_ROUNDS);

// NOTE SHA256 always produces a string that's 256 bits (or 32 bytes) long.
// In base64, that's ceil(32 / 3) * 4 = 44 bytes which meets the 72 byte limit.
const sha256 = (plaintext: string) =>
  createHash("sha256").update(plaintext).digest("base64");