import { IsArray, IsNotEmpty, IsObject } from 'class-validator';

export class CreateDashboardDto {
  @IsNotEmpty({ message: 'nombre es requerido' })
  name: string;

  @IsArray({ message: 'se requiere el archivo json' })
  data: any[];
}
