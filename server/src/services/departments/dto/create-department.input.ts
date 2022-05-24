import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field({ nullable: true })
  _id: string;

  @Field()
  name: string;

  @Field()
  organization: string;

  @Field({ nullable: true })
  admins: string;
}
