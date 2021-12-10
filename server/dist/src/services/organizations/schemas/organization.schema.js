"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsSchema = void 0;
const mongoose = require("mongoose");
exports.DepartmentsSchema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    logo: { type: String },
    departments: [{ type: mongoose.Types.ObjectId, ref: 'Department' }],
});
//# sourceMappingURL=organization.schema.js.map