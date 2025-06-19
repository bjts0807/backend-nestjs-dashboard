import { Injectable } from '@nestjs/common';

@Injectable()
export class DataClientsService {
  getInfo(clienteId: number) {
    return {
      title: `Ventas Totales Cliente No. (${clienteId})`,
      value: `$${clienteId * 1000000}`,
      percentage: `$${clienteId * 10}%`,
    };
  }

  getListProducts(clienteId: number) {
    return [
      { name: `Iphone 15 `, total: 1000, icon: 'bx bx-mobile' },
      { name: `Iphone 13 `, total: 850, icon: 'bx bx-mobile' },
      { name: `Macbook Air`, total: 760, icon: 'bx bx-laptop' },
      {
        name: `Ipad Mini`,
        total: 500,
        icon: 'bx bx-mobile-alt',
      },
      { name: `Diademas`, total: 300, icon: 'bx bx-headphone' },
    ];
  }

  getSales() {
    return {
      title: 'Ventas por Mes Cliente ',
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      totals: [
        1000000, 20000000, 15000000, 18000000, 21000000, 30000000, 34000000,
        27000000, 40000000, 32000000, 16000000, 21000000,
      ],
    };
  }
}
