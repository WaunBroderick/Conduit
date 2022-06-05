import { Test, TestingModule } from '@nestjs/testing';
import { MultiplechoiceResolver } from '../multiplechoice.resolver';
import { MultiplechoiceService } from '../multiplechoice.service';

describe('MultiplechoiceResolver', () => {
  let resolver: MultiplechoiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultiplechoiceResolver, MultiplechoiceService],
    }).compile();

    resolver = module.get<MultiplechoiceResolver>(MultiplechoiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
