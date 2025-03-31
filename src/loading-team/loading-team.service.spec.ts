import { Test, TestingModule } from '@nestjs/testing';
import { LoadingTeamService } from './loading-team.service';

describe('LoadingTeamService', () => {
  let service: LoadingTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadingTeamService],
    }).compile();

    service = module.get<LoadingTeamService>(LoadingTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
