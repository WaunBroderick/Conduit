import { Module } from '@nestjs/common';
import { MultiplechoiceService } from './multiplechoice.service';
import { MultiplechoiceResolver } from './multiplechoice.resolver';
import { MultipleChoice, MultipleChoiceSchema } from './multiplechoice.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MultipleChoice.name, schema: MultipleChoiceSchema },
    ]),
  ],
  providers: [MultiplechoiceResolver, MultiplechoiceService],
})
export class MultiplechoiceModule {}
