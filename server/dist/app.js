"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const celebrate_1 = require("celebrate");
const config_1 = require("./config");
const auth_1 = require("./routes/auth");
const middleware_1 = require("./middleware");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use((0, express_session_1.default)(config_1.SESSION_OPTS));
    app.use(express_1.default.json());
    app.use(auth_1.auth);
    app.use(middleware_1.notFound);
    app.use((0, celebrate_1.errors)());
    app.use(middleware_1.serverError);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map