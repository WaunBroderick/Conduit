import { Controller, Post, Body } from '@nestjs/common';


import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}
    
    @Post()
    createUser(
        @Body('name') userName: string,
        @Body('email') userEmail: string,
        @Body('organization') userOrganization: string,
        @Body('password') userPassword: string,
        ){
        const generatedId = this.UsersService.createUser(
            userName, 
            userEmail, 
            userOrganization, 
            userPassword
            );
        return {id: generatedId};
    }
}
