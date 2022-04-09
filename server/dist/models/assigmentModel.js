"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssigmentModel = void 0;
const mongoose_1 = require("mongoose");
const assigmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, required: true, default: false }
});
exports.AssigmentModel = (0, mongoose_1.model)('Assigment', assigmentSchema);
//# sourceMappingURL=assigmentModel.js.map