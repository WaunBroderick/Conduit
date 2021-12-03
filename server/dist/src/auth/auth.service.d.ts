import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { AuthCredentialsDto } from './dto/auth-crednetials.dto';
import { User } from './interfaces/user.interface';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(user: User): Promise<{
        accessToken: string;
    }>;
    validateUser(email: string, pass: string): Promise<User>;
}
