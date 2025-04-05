import { Test, TestingModule } from '@nestjs/testing';
import { ManageCompanyController } from './manage-company.controller';

describe('ManageCompanyController', () => {
  let controller: ManageCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageCompanyController],
    }).compile();

    controller = module.get<ManageCompanyController>(ManageCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
