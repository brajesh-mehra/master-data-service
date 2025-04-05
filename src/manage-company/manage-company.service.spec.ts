import { Test, TestingModule } from '@nestjs/testing';
import { ManageCompanyService } from './manage-company.service';

describe('ManageCompanyService', () => {
  let service: ManageCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageCompanyService],
    }).compile();

    service = module.get<ManageCompanyService>(ManageCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
