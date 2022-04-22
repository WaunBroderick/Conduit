import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { IAssignment } from './interfaces/assignment.interface';
import { CoursesService } from '../courses/courses.service';
@Controller('assignments')
export class AssignmentController {
  constructor(
    private readonly assignmentService: AssignmentService,
    private readonly coursesService: CoursesService,
  ) {}

  @Post()
  @ApiOperation({ description: 'Create an Assignment' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  public async createAssignment(
    @Body() createAssignmentDto: CreateAssignmentDto,
  ) {
    try {
      const newAssignment = await this.assignmentService.create(
        createAssignmentDto,
      );
      return newAssignment;
    } catch (err) {
      throw err;
    }
  }

  @Get()
  @ApiOperation({ description: 'Get all Assignments ' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  findAll() {
    return this.assignmentService.findAll();
  }

  @Get(`/:orgId/:userId`)
  @ApiOperation({ description: 'Get all Assignments by uer id ' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  findByUserId(@Param('orgId') orgId: string, @Param('userId') userId: string) {
    const allOrgCourses = this.coursesService.findAllByOrgId(orgId);
    const courseMap = this.assignmentService.createCourseMap(
      userId,
      allOrgCourses,
    );

    return courseMap;
  }

  @Get(':id')
  @ApiOperation({ description: 'Get a single Assignment by Id' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  findOne(@Param('id') id: string) {
    return this.assignmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update a single Assignment by Id' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  update(
    @Param('id') id: string,
    @Body() updateAssignmentDto: UpdateAssignmentDto,
  ) {
    return this.assignmentService.update(id, updateAssignmentDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Remove a single Assignment by Id' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  remove(@Param('id') id: string) {
    return this.assignmentService.remove(id);
  }
}
