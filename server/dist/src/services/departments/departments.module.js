"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsModule = void 0;
const common_1 = require("@nestjs/common");
const departments_service_1 = require("./departments.service");
const departments_controller_1 = require("./departments.controller");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const departments_schema_1 = require("./schemas/departments.schema");
let DepartmentsModule = class DepartmentsModule {
};
DepartmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Department', schema: departments_schema_1.DepartmentsSchema },
            ]),
        ],
        controllers: [departments_controller_1.DepartmentsController],
        providers: [departments_service_1.DepartmentsService],
    })
], DepartmentsModule);
exports.DepartmentsModule = DepartmentsModule;
//# sourceMappingURL=departments.module.js.map