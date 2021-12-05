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
exports.CreateOrganizationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreateOrganizationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, organization: { required: true, type: () => String }, subSection: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the department within the organization',
        type: String,
    }),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the department within the organization',
        type: String,
    }),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "organization", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The group of departments under the Organization that this department belongs to',
    }),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "subSection", void 0);
exports.CreateOrganizationDto = CreateOrganizationDto;
//# sourceMappingURL=create-organization.dto.js.map