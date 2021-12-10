import { Controller, Post, Get, Body } from '@nestjs/common';

import { User } from './user.model';
import { UsersService } from './users.service';
import { AuthService } from 'src/services/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  createUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('organization') userOrganization: string,
    @Body('password') userPassword: string,
  ) {
    const generatedId = this.UsersService.createUser(
      userName,
      userEmail,
      userOrganization,
      userPassword,
    );
    return { id: generatedId };
  }

  @Post(':email')
  validateUser(
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
  ) {
    return console.log('well it works');
  }

  @Get()
  async index() {
    return await this.UsersService.findAll();
  }
}
