import { Test, TestingModule } from '@nestjs/testing';
import { ManageCpController } from './manage-cp.controller';

describe('ManageCpController', () => {
  let controller: ManageCpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageCpController],
    }).compile();

    controller = module.get<ManageCpController>(ManageCpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
