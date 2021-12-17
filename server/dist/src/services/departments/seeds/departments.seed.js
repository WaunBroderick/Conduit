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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const departments_service_1 = require("../departments.service");
let DepartmentsSeed = class DepartmentsSeed {
    constructor(departmentsService) {
        this.departmentsService = departmentsService;
    }
    async create() {
        const department = await this.departmentsService.create({
            name: 'Technology',
            organization: '61b2ade3b1d64837416da81a',
            subSection: '',
        });
        console.log(department);
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'create:department',
        describe: 'create a department',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentsSeed.prototype, "create", null);
DepartmentsSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService])
], DepartmentsSeed);
exports.DepartmentsSeed = DepartmentsSeed;
//# sourceMappingURL=departments.seed.js.map