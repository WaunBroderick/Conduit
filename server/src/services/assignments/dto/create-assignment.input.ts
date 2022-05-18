import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssignmentInput {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true, defaultValue: 0 })
  completion: number;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  course: string;

  @Field({ nullable: true })
  user: string;
}
