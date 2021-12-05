"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
});
//# sourceMappingURL=department.schema.js.map