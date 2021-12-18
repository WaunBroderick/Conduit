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

import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { AssignUserDepartmentDto } from './dto/assign-user-department';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAllUsers(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const users = await this.usersService.findAll(paginationQuery);
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  public async getUser(@Res() Res, @Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return Res.status(HttpStatus.OK).json(user);
  }

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
