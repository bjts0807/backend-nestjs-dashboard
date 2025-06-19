import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { DataClientsService } from './data-clients.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('data-clients')
export class DataClientsController {
  constructor(private readonly dataClientsService: DataClientsService) {}

  @Get('info/sale')
  @UseGuards(JwtAuthGuard)
  getInfoSale(@Req() req) {
    const clienteId = req.user.id;
    return this.dataClientsService.getInfo(clienteId);
  }

  @Get('list/products')
  @UseGuards(JwtAuthGuard)
  getProducts(@Req() req) {
    const clienteId = req.user.id;
    return this.dataClientsService.getListProducts(clienteId);
  }

  @Get('list/sales')
  @UseGuards(JwtAuthGuard)
  getSales() {
    return this.dataClientsService.getSales();
  }
}
