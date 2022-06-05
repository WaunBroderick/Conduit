import { Module } from '@nestjs/common';
import { MultiplechoiceService } from './multiplechoice.service';
import { MultiplechoiceResolver } from './multiplechoice.resolver';

@Module({
  providers: [MultiplechoiceResolver, MultiplechoiceService]
})
export class MultiplechoiceModule {}
