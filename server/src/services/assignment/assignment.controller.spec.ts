import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from './assignment.service';

describe('AssignmentController', () => {
  let controller: AssignmentController;
  let service: AssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentController],
      providers: [AssignmentService],
    }).compile();

    service = module.get<AssignmentService>(AssignmentService);
    controller = module.get<AssignmentController>(AssignmentController);
  });

  describe('findAll', () => {
    it('should return an array of assignments', async () => {
      const result = 'test';
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
