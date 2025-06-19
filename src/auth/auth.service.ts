import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private clientsService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async validateClient(email: string, password: string) {
    const customer = await this.clientsService.findByEmail(email);
    if (customer && (await bcrypt.compare(password, customer.password))) {
      const { password, ...result } = customer;
      return result;
    }
    return null;
  }

  async login(client: any) {
    const payload = { sub: client.id, email: client.email };
    return {
      ...client,
      access_token: this.jwtService.sign(payload),
    };
  }
}
