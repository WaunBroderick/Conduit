import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssignmentInput {
  @Field()
  name: string;
}
