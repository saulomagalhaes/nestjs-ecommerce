import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/emailEUnico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @IsNotEmpty()
  @EmailEhUnico({ message: 'Já existe um usuário com este email' })
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  senha: string;
}
