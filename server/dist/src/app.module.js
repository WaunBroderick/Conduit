"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const auth_module_1 = require("./services/auth/auth.module");
const app_service_1 = require("./app.service");
const users_module_1 = require("./services/users/users.module");
const organizations_controller_1 = require("./services/organizations/organizations.controller");
const organizations_module_1 = require("./services/organizations/organizations.module");
const departments_module_1 = require("./services/departments/departments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env'],
            }),
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://wbroderick:gnrkTanyMKLN43aa@conduitdb.afr7o.mongodb.net/Conduit`),
            users_module_1.UsersModule,
            organizations_module_1.OrganizationsModule,
            departments_module_1.DepartmentsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController, organizations_controller_1.OrganizationsController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map