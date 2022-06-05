import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Multiplechoice {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
