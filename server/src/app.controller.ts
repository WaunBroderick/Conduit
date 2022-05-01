import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello() {
    return 'Hello World';
  }
}
