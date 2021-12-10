"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const organizations_service_1 = require("./organizations.service");
const mongoose_1 = require("@nestjs/mongoose");
const organization_model_1 = require("./organization.model");
const organizations_controller_1 = require("./organizations.controller");
let OrganizationsModule = class OrganizationsModule {
};
OrganizationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Organization', schema: organization_model_1.OrganizationSchema },
            ]),
        ],
        providers: [organizations_service_1.OrganizationsService],
        exports: [organizations_service_1.OrganizationsService],
        controllers: [organizations_controller_1.OrganizationsController],
    })
], OrganizationsModule);
exports.OrganizationsModule = OrganizationsModule;
//# sourceMappingURL=organizations.module.js.map