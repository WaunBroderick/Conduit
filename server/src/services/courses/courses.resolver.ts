import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { Course } from './courses.schema';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}

  @Mutation(() => Course)
  async createCourse(@Args('input') course: CreateCourseInput) {
    return this.coursesService.createCourse(course);
  }

  @Query(() => [Course], { name: 'courses' })
  findAll() {
    return this.coursesService.findAll();
  }

  @Query(() => Course, { name: 'course' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.coursesService.findById(id);
  }

  @Mutation(() => Course)
  updateCourse(
    @Args('updateCourseInput') updateCourseInput: UpdateCourseInput,
  ) {
    return this.coursesService.update(updateCourseInput.id, updateCourseInput);
  }

  @Mutation(() => Course)
  removeCourse(@Args('id', { type: () => Int }) id: string) {
    return this.coursesService.remove(id);
  }
}
