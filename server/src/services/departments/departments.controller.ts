import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
  Res,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AbilityFactory, Action } from 'src/permissions/ability.factory';
import { User } from '../users/user.model';
import { ForbiddenError } from '@casl/ability';
import { CheckAbilities } from 'src/permissions/abilities.decorator';

var mongoose = require('mongoose');

@ApiTags('Organizational')
@Controller('departments')
export class DepartmentsController {
  constructor(
    private readonly departmentsService: DepartmentsService,
    private abilityFactory: AbilityFactory,
  ) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  public async findAll(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const users = await this.departmentsService.findAll(paginationQuery);
    return res.status(HttpStatus.OK).json(users);
  }

  // EXAMPLE PERMISSION ROUTE
  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  @CheckAbilities({ action: Action.Delete, subject: User })
  findOne(@Res() res, @Param('id') id: string) {
    const user = {
      userId: 'fdsfsd',
      isAdmin: false,
      name: 'jeff',
      email: 'jeff@jeff.com',
      organization: mongoose.Types.ObjectId('61c36c42ad95a9d99a9ea844'),
      password: '1234',
      departments: Array['tech'],
      online: true,
      userRoles: Array['tech'],
    };
    const ability = this.abilityFactory.definePermission(user);

    //const isAllowed = ability.can(Action.Create, User);
    //if (!isAllowed) {
    //  throw new ForbiddenException('You lack sufficient permissions.');
    //}

    try {
      ForbiddenError.from(ability).throwUnlessCan(Action.Create, User);

      return 'hellllo';
    } catch (error) {
      throw new ForbiddenException(error.message);
    }

    return 'You made it';
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
