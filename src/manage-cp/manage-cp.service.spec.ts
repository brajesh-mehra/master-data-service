import { Test, TestingModule } from '@nestjs/testing';
import { ManageCpService } from './manage-cp.service';

describe('ManageCpService', () => {
  let service: ManageCpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageCpService],
    }).compile();

    service = module.get<ManageCpService>(ManageCpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
