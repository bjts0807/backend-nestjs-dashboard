import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { DashboardsService } from './dashboards.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('dashboards')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  create(@Body() createDashboardDto: CreateDashboardDto, @Req() req: Request) {
    const clienteId = (req.user as any)?.id;
    return this.dashboardsService.create(createDashboardDto, clienteId);
  }

  @Get('list')
  @UseGuards(JwtAuthGuard)
  findOne(@Req() req: Request) {
    const clienteId = (req.user as any)?.id;
    return this.dashboardsService.getDashboardByClient(clienteId);
  }

  @Get('show/:id')
  @UseGuards(JwtAuthGuard)
  find(@Param('id') id: string) {
    return this.dashboardsService.findOne(+id);
  }

  @Patch('update/:id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateDashboardDto: UpdateDashboardDto,
  ) {
    return this.dashboardsService.update(+id, updateDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardsService.remove(+id);
  }
}
