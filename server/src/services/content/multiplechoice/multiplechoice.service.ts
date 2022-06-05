import { Injectable } from '@nestjs/common';
import { CreateMultiplechoiceInput } from './dto/create-multiplechoice.input';
import { UpdateMultiplechoiceInput } from './dto/update-multiplechoice.input';

@Injectable()
export class MultiplechoiceService {
  create(createMultiplechoiceInput: CreateMultiplechoiceInput) {
    return 'This action adds a new multiplechoice';
  }

  findAll() {
    return `This action returns all multiplechoice`;
  }

  findOne(id: string) {
    return `This action returns a #${id} multiplechoice`;
  }

  update(id: string, updateMultiplechoiceInput: UpdateMultiplechoiceInput) {
    return `This action updates a #${id} multiplechoice`;
  }

  remove(id: string) {
    return `This action removes a #${id} multiplechoice`;
  }
}
