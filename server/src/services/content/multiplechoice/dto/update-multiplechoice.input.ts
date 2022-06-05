import { CreateMultiplechoiceInput } from './create-multiplechoice.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMultiplechoiceInput extends PartialType(
  CreateMultiplechoiceInput,
) {
  @Field(() => String, {
    description: 'The string to become the Mongo ObjectId',
    nullable: true,
  })
  id: string;

  @Field()
  name: string;
}
