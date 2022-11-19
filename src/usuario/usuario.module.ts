import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailEUnicoValidator } from './validacao/emailEUnico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEUnicoValidator],
})
export class UsuarioModule {}
