import { Test, TestingModule } from '@nestjs/testing';
import { DistrictTalukaController } from './district-taluka.controller';

describe('DistrictTalukaController', () => {
  let controller: DistrictTalukaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrictTalukaController],
    }).compile();

    controller = module.get<DistrictTalukaController>(DistrictTalukaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
