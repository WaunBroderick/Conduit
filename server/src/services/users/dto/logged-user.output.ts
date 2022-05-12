import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users.schema';

@ObjectType()
export class LoggedUserOutput {
  @Field(() => String, { description: 'Generated access_token of the user' })
  access_token: string;

  @Field(() => User, { description: 'The returned User information' })
  user: User;
}
