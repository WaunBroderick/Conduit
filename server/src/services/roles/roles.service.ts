import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Role } from './role.model';
import { Model } from 'mongoose';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IRole } from './interfaces/roles.interface';

var mongoose = require('mongoose');

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private readonly roleModel: Model<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<IRole> {
    const newRole = await new this.roleModel(createRoleDto);
    return newRole.save();
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const query = this.roleModel
      .find()
      .skip(documentsToSkip)
      .limit(Number(limitOfDocuments));

    const results = await query;
    const count = await this.roleModel.count();

    return { results, count };
  }

  public async findOne(id: string): Promise<IRole> {
    const ID = mongoose.Types.ObjectId(id);
    const role = await this.roleModel.findById(ID).exec();

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const ID = mongoose.Types.ObjectId(id);
    const Role = await this.roleModel.findByIdAndUpdate(ID, updateRoleDto, {
      new: true,
    });
    return Role;
  }

  async remove(id: string): Promise<any> {
    const ID = mongoose.Types.ObjectId(id);
    const deletedRole = await this.roleModel.findByIdAndRemove(ID);

    return deletedRole;
  }
}
