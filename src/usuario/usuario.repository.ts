import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this._usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      new HttpException('Usuário não existe', HttpStatus.NOT_FOUND);
    }

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      possivelUsuario[chave] = valor;
    });

    return possivelUsuario;
  }
}
