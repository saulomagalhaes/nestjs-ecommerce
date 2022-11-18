import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private _usuarios = [];

  async salvar(usuario) {
    this._usuarios.push(usuario);
  }

  async listarUsuarios() {
    return this._usuarios;
  }
}
