import { Test, TestingModule } from '@nestjs/testing';
import { DataClientsController } from './data-clients.controller';

describe('DataClientsController', () => {
  let controller: DataClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataClientsController],
    }).compile();

    controller = module.get<DataClientsController>(DataClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
