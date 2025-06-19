import { Test, TestingModule } from '@nestjs/testing';
import { DataClientsService } from './data-clients.service';

describe('DataClientsService', () => {
  let service: DataClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataClientsService],
    }).compile();

    service = module.get<DataClientsService>(DataClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
