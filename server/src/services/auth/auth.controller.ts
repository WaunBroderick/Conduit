import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
  NotFoundException,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-crednetials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

const cookieParser = require('cookie-parser');

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn2(@Request() req) {
    const token = this.authService.signIn(req.user);

    const secretData = {
      token,
      refreshToken: '',
    };
    //res.cookie('auth-cookie', secretData, { httpOnly: true });
    return this.authService.signIn(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req, @Res({ passthrough: true }) res) {
    try {
      const token = await this.authService.signIn(req.user);

      const secretData = {
        token,
        refreshToken: '',
      };

      res.cookie('auth-cookie', secretData, { httpOnly: true });
      if (!token) {
        throw new NotFoundException('Sign In Failed');
      }
      return res.status(HttpStatus.OK).json({
        res,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: login failed' + res.data,
        status: 400,
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getMe(@Request() req) {
    return req.user;
  }
}
