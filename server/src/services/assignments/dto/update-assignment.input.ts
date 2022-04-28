import { CreateAssignmentInput } from './create-assignment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssignmentInput extends PartialType(CreateAssignmentInput) {
  @Field(() => String)
  id: string;

  @Field()
  name: string;
}
