import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssignmentInput {
  @Field(() => String, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  course: string;

  @Field({ nullable: true })
  user: string;
}
