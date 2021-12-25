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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DepartmentsService = class DepartmentsService {
    constructor(departmentModel) {
        this.departmentModel = departmentModel;
    }
    async create(createDepartmentDto) {
        const { name, organization, subSection } = createDepartmentDto;
        const Department = new this.departmentModel({
            name,
            organization,
            subSection,
        });
        try {
            await Department.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Department already exists');
            }
            throw error;
        }
    }
    async findAll(paginationQuery) {
        const { limit, offset } = paginationQuery;
        return await this.departmentModel.find().skip(offset).limit(limit).exec();
    }
    findOne(id) {
        return `This action returns a #${id} department`;
    }
    update(id, updateDepartmentDto) {
        return `This action updates a #${id} department`;
    }
    remove(id) {
        return `This action removes a #${id} department`;
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Department')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map