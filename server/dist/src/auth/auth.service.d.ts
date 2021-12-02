import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUserBACKUP(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    signIn(user: any): Promise<{
        accessToken: string;
    }>;
    validateUser(email: string, password: string): Promise<any>;
}
