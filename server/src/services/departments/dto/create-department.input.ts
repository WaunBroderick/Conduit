import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field()
  name: string;

  @Field()
  organization: string;

  @Field({ nullable: true })
  admins: string;
}
