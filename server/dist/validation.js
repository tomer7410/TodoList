"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = exports.validate = void 0;
const celebrate_1 = require("celebrate");
const validate = (schema) => (0, celebrate_1.celebrate)(schema, {
    abortEarly: false,
}, {
    mode: celebrate_1.Modes.FULL,
});
exports.validate = validate;
const email = celebrate_1.Joi.string().email().required();
const password = celebrate_1.Joi.string().max(256).required();
exports.loginSchema = {
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        email,
        password,
    }),
};
exports.registerSchema = {
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        email,
        password,
        name: celebrate_1.Joi.string().max(256).required(),
    }),
};
//# sourceMappingURL=validation.js.map