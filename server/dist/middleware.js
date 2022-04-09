"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = exports.serverError = exports.notFound = exports.guest = exports.auth = void 0;
const auth = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.status(401).json({ message: "Unauthorized" });
};
exports.auth = auth;
const guest = (req, res, next) => {
    console.log("in guess");
    if (req.session.userId) {
        console.log("forbidden");
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};
exports.guest = guest;
const notFound = (req, res, next) => {
    res.status(404).json({ message: "Not Found" });
};
exports.notFound = notFound;
const serverError = (err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: "Bad Request" });
    }
    console.error(err);
    res.status(500).json({ message: "Server Error" });
};
exports.serverError = serverError;
const whitelist = new Set(["http://localhost:3000"]);
exports.corsOptions = {
    optionsSuccessStatus: 200,
    origin: (origin, callback) => {
        console.log(origin);
        if (whitelist.has(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
};
//# sourceMappingURL=middleware.js.map