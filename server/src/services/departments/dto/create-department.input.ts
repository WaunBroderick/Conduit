import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  admins: string;
}
