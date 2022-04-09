"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.hashPassword = exports.comparePassword = void 0;
const express_1 = require("express");
const bcrypt_1 = require("bcrypt");
const crypto_1 = require("crypto");
const validation_1 = require("../validation");
const db_1 = require("../db/db");
const middleware_1 = require("../middleware");
const config_1 = require("../config");
const router = (0, express_1.Router)();
exports.auth = router;
router.post("/login", (0, validation_1.validate)(validation_1.loginSchema), async (req, res) => {
    const { email, password } = req.body;
    console.log('im here');
    const user = db_1.db.users.find((user) => user.email === email);
    const fakeHash = "$2b$12$tLn0rFkPBoE1WCpdM6MjR.t/h6Wzql1kAd27FecEDtjRYsTFlYlWa";
    const pwdHash = user?.password || fakeHash;
    const pwdMatches = await (0, exports.comparePassword)(password, pwdHash);
    if (!user || !pwdMatches) {
        return res.status(401).json({
            message: "Email or password is incorrect",
        });
    }
    req.session.userId = user.id;
    res.json({ message: "OK" });
});
router.post("/logout", middleware_1.auth, (req, res) => {
    req.session.destroy((err) => {
        if (err)
            throw err;
        res.clearCookie(config_1.SESSION_COOKIE);
        res.json({ message: "OK" });
    });
});
router.post("/register", middleware_1.guest, (0, validation_1.validate)(validation_1.registerSchema), async (req, res) => {
    const { email, password, name } = req.body;
    console.log("here");
    const userExists = db_1.db.users.some((user) => user.email === email);
    if (userExists) {
        console.log("user is exist");
        return res.status(400).json({
            message: "Email is already taken",
        });
    }
    const user = {
        id: db_1.db.users.length + 1,
        email,
        password: await (0, exports.hashPassword)(password),
        name,
        verifiedAt: null,
    };
    db_1.db.users.push(user);
    console.log(db_1.db.users);
    req.session.userId = user.id;
    res.status(500).json({ message: "OK" });
});
const comparePassword = (plaintextPassword, hash) => (0, bcrypt_1.compare)(sha256(plaintextPassword), hash);
exports.comparePassword = comparePassword;
const hashPassword = (plaintextPassword) => (0, bcrypt_1.hash)(sha256(plaintextPassword), config_1.BCRYPT_SALT_ROUNDS);
exports.hashPassword = hashPassword;
const sha256 = (plaintext) => (0, crypto_1.createHash)("sha256").update(plaintext).digest("base64");
//# sourceMappingURL=auth.js.map