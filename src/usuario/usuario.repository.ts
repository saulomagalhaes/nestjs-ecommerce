import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private _usuarios: UsuarioEntity[] = [];

  private buscaPorId(id: string) {
    const possivelUsuario = this._usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      new HttpException('Usuário não existe', HttpStatus.NOT_FOUND);
    }

    return possivelUsuario;
  }

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

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorId(id);

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });

    return usuario;
  }

  async remove(id: string) {
    const usuario = this.buscaPorId(id);
    this._usuarios = this._usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );
    return usuario;
  }
}
