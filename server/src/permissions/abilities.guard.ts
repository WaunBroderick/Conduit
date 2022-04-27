import { ForbiddenError } from '@casl/ability';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { RequiredRole, CHECK_ABILITY } from './abilities.decorator';
import { AbilityFactory } from './ability.factory';

var mongoose = require('mongoose');

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: AbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rules =
      this.reflector.get<RequiredRole[]>(CHECK_ABILITY, context.getHandler()) ||
      [];

    //Placeholder for rapid testing
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
    const ability = this.caslAbilityFactory.definePermission(user);

    try {
      rules.forEach((rule) =>
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject),
      );

      return true;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
}
