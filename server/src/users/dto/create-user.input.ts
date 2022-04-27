import { InputType, Int, Field } from '@nestjs/graphql';
import { Organization } from 'src/organizations/organizations.schema';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  //@Field(() => Organization, { nullable: true })
  //organization: Organization;

  @Field()
  password: string;

  @Field({ nullable: true })
  isAdmin: boolean;

  @Field({ nullable: true })
  online: boolean;
}
