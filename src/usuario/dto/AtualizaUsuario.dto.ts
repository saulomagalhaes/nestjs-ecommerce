import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/emailEUnico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @IsNotEmpty()
  @EmailEhUnico({ message: 'Já existe um usuário com este email' })
  @IsOptional()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  @IsOptional()
  senha: string;
}
