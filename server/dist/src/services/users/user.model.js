"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true, required: true },
    organization: { type: mongoose.Types.ObjectId, required: true },
    password: { type: String, required: true },
});
class User {
}
exports.User = User;
//# sourceMappingURL=user.model.js.map