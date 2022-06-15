import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMultiplechoiceInput } from './dto/create-multiplechoice.input';
import { UpdateMultiplechoiceInput } from './dto/update-multiplechoice.input';
import {
  MultipleChoice,
  MultipleChoiceDocument,
} from './multiplechoice.schema';
import { Model } from 'mongoose';

@Injectable()
export class MultiplechoiceService {
  constructor(
    @InjectModel(MultipleChoice.name)
    private multipleChoiceModel: Model<MultipleChoiceDocument>,
  ) {}

  async create(multipleChoiceContent: CreateMultiplechoiceInput) {
    return this.multipleChoiceModel.create(multipleChoiceContent);
  }

  async findAll(): Promise<MultipleChoice[]> {
    return this.multipleChoiceModel.find().lean();
  }

  async findOne(id: string) {
    return this.multipleChoiceModel.findById(id).lean();
  }

  update(id: string, multipleChoiceContent: UpdateMultiplechoiceInput) {
    return `This action updates a #${id} multiplechoice`;
  }

  async remove(id: string): Promise<MultipleChoice> {
    return await this.multipleChoiceModel.findByIdAndRemove(id);
  }
}
