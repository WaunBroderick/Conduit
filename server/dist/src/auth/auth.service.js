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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signUp(authCredentialsDto) {
        const { email, password, organization, name } = authCredentialsDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({
            email,
            password: hashedPassword,
            name,
            organization: mongoose.Types.ObjectId(organization),
        });
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('User already exists');
            }
            throw error;
        }
    }
    async signIn(user) {
        const payload = {
            email: user.email,
            sub: user._id,
            organization: user.organization,
            name: user.name,
        };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async validateUser(email, pass) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            return null;
        }
        const valid = await bcrypt.compare(pass, user.password);
        if (valid) {
            return user;
        }
        return null;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map