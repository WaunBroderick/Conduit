import { CreateCourseInput } from './create-course.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  @Field(() => String)
  id: string;
}
