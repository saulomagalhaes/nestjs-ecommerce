import { Body, Controller, Get, Post } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioentity = new UsuarioEntity();
    usuarioentity.email = dadosDoUsuario.email;
    usuarioentity.senha = dadosDoUsuario.senha;
    usuarioentity.nome = dadosDoUsuario.nome;
    usuarioentity.id = uuid();

    this.usuarioRepository.salvar(usuarioentity);

    return {
      id: usuarioentity.id,
      message: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioRepository.listarUsuarios();
  }
}
