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
const organization_model_1 = require("./organization.model");
const mongoose_2 = require("mongoose");
let OrganizationsService = class OrganizationsService {
    constructor(organizationModel) {
        this.organizationModel = organizationModel;
    }
    async findAll(paginationQuery) {
        const { limit, offset } = paginationQuery;
        return await this.organizationModel.find().skip(offset).limit(limit).exec();
    }
    async create(createOrganizationDto) {
        const newOrganization = await new this.organizationModel(createOrganizationDto);
        return newOrganization.save();
    }
    async findOne(id) {
        const organization = await this.organizationModel
            .findById({ _id: id })
            .exec();
        if (!organization) {
            throw new common_1.NotFoundException(`Customer #${id} not found`);
        }
        return organization;
    }
    async updateOrganization(organizationId, updateOrganizationDto) {
        const existingOrganization = await this.organizationModel.findByIdAndUpdate({ _id: organizationId }, updateOrganizationDto);
        if (!existingOrganization) {
            throw new common_1.NotFoundException(`Organization #${organizationId} not found`);
        }
        return existingOrganization;
    }
    async remove(id) {
        const deletedOrganization = await this.organizationModel.findByIdAndRemove(id);
        return deletedOrganization;
    }
};
OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(organization_model_1.Organization.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizationsService);
exports.OrganizationsService = OrganizationsService;
//# sourceMappingURL=organizations.service.js.map