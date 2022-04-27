import { SetMetadata } from '@nestjs/common';
import { Action, Subjects } from './ability.factory';

export interface RequiredRole {
  action: Action;
  subject: Subjects;
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRole[]) =>
  SetMetadata(CHECK_ABILITY, requirements);
