import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateMultiplechoiceInput {
  @Field(() => String, {
    description: 'The string to become the Mongo ObjectId',
    nullable: true,
  })
  id: string;

  @Field()
  name: string;

  @Field()
  content: string;
}
