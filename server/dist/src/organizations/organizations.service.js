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
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrganizationsService = class OrganizationsService {
    constructor(organizationModel) {
        this.organizationModel = organizationModel;
    }
    async create(createOrganizationDto) {
        const { name, address, logo, departments } = createOrganizationDto;
        const Organization = new this.organizationModel({
            name,
            address,
            logo,
            departments,
        });
        try {
            await Organization.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Organization already exists');
            }
            throw error;
        }
    }
    findAll() {
        return this.organizationModel.find().exec();
    }
    findOne(id) {
        return `This action returns a #${id} department`;
    }
    async update(id, updateOrganizationDto) {
        const existingOrganization = await this.organizationModel.findByIdAndUpdate({ _id: id }, updateOrganizationDto);
        if (!existingOrganization) {
            throw new common_1.NotFoundException(`Organization #${id} not found`);
        }
        return null;
    }
    async remove(id) {
        const deletedOrganization = await this.organizationModel.findByIdAndRemove(id);
        return deletedOrganization;
    }
};
OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Organization')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizationsService);
exports.OrganizationsService = OrganizationsService;
//# sourceMappingURL=organizations.service.js.map