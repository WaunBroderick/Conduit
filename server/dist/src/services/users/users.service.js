"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("./user.model");
const mongoose_2 = require("mongoose");
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll(paginationQuery) {
        const { limit, offset } = paginationQuery;
        return await this.userModel.find().skip(offset).limit(limit).exec();
    }
    async findOne(id) {
        const user = await this.userModel.findById({ _id: id }).exec();
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    async findByOrg(orgId) {
        const query = { organization: mongoose.Types.ObjectId(orgId) };
        if (!query) {
            throw new common_1.NotFoundException(`No users belonging to organization #${orgId} were found`);
        }
        return await this.userModel
            .find(query)
            .select('name')
            .select('email')
            .select('organization')
            .exec();
    }
    async updateUserDepartments(userId, assignUserDepartmentDto) {
        const existingUser = await this.userModel.findByIdAndUpdate({ _id: userId }, assignUserDepartmentDto);
        if (!existingUser) {
            throw new common_1.NotFoundException(`Organization #${userId} not found`);
        }
        return existingUser;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map