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

  async existeComEmail(email: string) {
    const possivelUsuario = this._usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
