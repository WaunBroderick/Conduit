import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssignmentInput {
  @Field(() => String, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  user: string;
}
