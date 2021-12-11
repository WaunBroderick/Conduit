import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Res,
  NotFoundException,
  HttpStatus,
  Put,
  Query,
} from '@nestjs/common';

import { User } from './user.model';
import { UsersService } from './users.service';
import { AuthService } from 'src/services/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AssignUserDepartmentDto } from './dto/assign-user-department';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('/:id')
  public async assignUserDepartment(
    @Res() res,
    @Param('id') userId: string,
    @Body() assignUserDepartmentDto: AssignUserDepartmentDto,
  ) {
    try {
      const user = await this.usersService.updateUserDepartments(
        userId,
        assignUserDepartmentDto,
      );
      if (!user) {
        throw new NotFoundException('User does not exist');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Customer has been successfully updated',
        user,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: User not updated!' + res.data,
        status: 400,
      });
    }
  }
}
