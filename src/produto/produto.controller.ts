import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoRepository } from './produto.repository';

@Controller('produtos')
export class Produtocontroller {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    this.produtoRepository.salvar(dadosDoProduto);
    return dadosDoProduto;
  }

  @Get()
  async buscaProdutos() {
    return this.produtoRepository.listarProdutos();
  }
}
