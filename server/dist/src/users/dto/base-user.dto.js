"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUserDto = void 0;
const openapi = require("@nestjs/swagger");
class BaseUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, description: { required: false, type: () => String } };
    }
}
exports.BaseUserDto = BaseUserDto;
//# sourceMappingURL=base-user.dto.js.map