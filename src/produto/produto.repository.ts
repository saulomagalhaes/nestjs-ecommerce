import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private _produtos = [];

  async salvar(produto) {
    this._produtos.push(produto);
  }

  async listarProdutos() {
    return this._produtos;
  }
}
