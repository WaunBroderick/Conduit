import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.schema';

var bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtTokenServive: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
      return null;
    }
  }

  async generateUserCredentials(user: User) {
    const payload = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      sub: user.id,
    };
    return {
      access_token: this.jwtTokenServive.sign(payload),
    };
  }
}
