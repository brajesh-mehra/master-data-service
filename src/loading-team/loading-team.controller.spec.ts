import { Test, TestingModule } from '@nestjs/testing';
import { LoadingTeamController } from './loading-team.controller';

describe('LoadingTeamController', () => {
  let controller: LoadingTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadingTeamController],
    }).compile();

    controller = module.get<LoadingTeamController>(LoadingTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
