import { UsersService } from './users.service';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    createUser(userName: string, userEmail: string, userOrganization: string, userPassword: string): {
        id: Promise<string>;
    };
}
