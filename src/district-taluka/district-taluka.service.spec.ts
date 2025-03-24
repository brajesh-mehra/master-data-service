import { Test, TestingModule } from '@nestjs/testing';
import { DistrictTalukaService } from './district-taluka.service';

describe('DistrictTalukaService', () => {
  let service: DistrictTalukaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistrictTalukaService],
    }).compile();

    service = module.get<DistrictTalukaService>(DistrictTalukaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
