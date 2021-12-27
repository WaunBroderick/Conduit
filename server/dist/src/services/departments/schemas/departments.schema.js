"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsSchema = void 0;
const mongoose = require("mongoose");
exports.DepartmentsSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    organization: { type: mongoose.Types.ObjectId, required: true },
    subSection: { type: String },
});
//# sourceMappingURL=departments.schema.js.map