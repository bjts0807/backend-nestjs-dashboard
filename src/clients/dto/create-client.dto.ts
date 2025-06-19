import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'El email es obligatorio' })
  @IsEmail({}, { message: 'El campo email no tiene el formato correcto' })
  email: string;

  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  name: string;

  @MinLength(6, { message: 'El password debe tener minimo 6 caracteres' })
  password: string;
}
