import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { DepartmentsService } from 'src/services/departments/departments.service';

@Injectable()
export class DepartmentsSeed {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Command({
    command: 'create:department',
    describe: 'create a department',
  })
  async create() {
    const department = await this.departmentsService.create({
      name: 'TEST',
      organization: '61b2ade3b1d64837416da81a',
      subSection: '',
    });
    console.log(department);
  }
}
