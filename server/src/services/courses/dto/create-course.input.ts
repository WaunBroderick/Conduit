import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;
}
