import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private _usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
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
