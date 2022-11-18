import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  senha: string;
}
