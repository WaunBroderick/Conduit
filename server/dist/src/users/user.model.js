"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    organization: { type: String, required: true },
    password: { type: String, required: true },
});
class User {
}
exports.User = User;
//# sourceMappingURL=user.model.js.map