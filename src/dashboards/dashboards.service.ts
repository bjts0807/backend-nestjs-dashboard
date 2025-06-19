import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { Dashboard } from './entities/dashboard.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardsService {
  constructor(
    @InjectRepository(Dashboard)
    private dashboardRepository: Repository<Dashboard>,
  ) {}

  async create(
    createDashboardDto: CreateDashboardDto,
    clientId: number,
  ): Promise<Dashboard> {
    const dashboard = this.dashboardRepository.create({
      ...createDashboardDto,
      client: { id: clientId },
    });
    return await this.dashboardRepository.save(dashboard);
  }

  findAll() {
    return `This action returns all dashboards`;
  }

  findOne(id: number) {
    return this.dashboardRepository.findOneBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }

  async getDashboardByClient(clientId: number) {
    const dashboard = await this.dashboardRepository.find({
      where: { client: { id: clientId } },
      relations: ['client'],
    });
    return dashboard;
  }

  async update(dashboardId: number, updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardRepository.update(dashboardId, updateDashboardDto);
  }
}
