"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = exports.OrganizationSchema = void 0;
const mongoose = require("mongoose");
exports.OrganizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    logo: { type: String }
});
class Organization {
}
exports.Organization = Organization;
//# sourceMappingURL=organization.model.js.map