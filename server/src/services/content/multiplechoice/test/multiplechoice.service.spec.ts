import { Test, TestingModule } from '@nestjs/testing';
import { MultiplechoiceService } from '../multiplechoice.service';

describe('MultiplechoiceService', () => {
  let service: MultiplechoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultiplechoiceService],
    }).compile();

    service = module.get<MultiplechoiceService>(MultiplechoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
