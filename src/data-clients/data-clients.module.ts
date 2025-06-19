import { Module } from '@nestjs/common';
import { DataClientsController } from './data-clients.controller';
import { DataClientsService } from './data-clients.service';

@Module({
  controllers: [DataClientsController],
  providers: [DataClientsService]
})
export class DataClientsModule {}
