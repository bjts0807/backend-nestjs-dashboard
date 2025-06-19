import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async findAll() {
    return this.clientRepository.find();
  }

  async create(clientDto: CreateClientDto): Promise<Client> {
    const hashedPassword = await bcrypt.hash(clientDto.password, 10);
    const client = this.clientRepository.create({
      ...clientDto,
      password: hashedPassword,
    });
    return this.clientRepository.save(client);
  }

  async findByEmail(email: string) {
    return this.clientRepository.findOne({ where: { email } });
  }

  async findById(id: number) {
    return this.clientRepository.findBy({ id });
  }
}
