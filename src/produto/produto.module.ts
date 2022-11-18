import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Produtocontroller } from './produto.controller';
import { ProdutoRepository } from './produto.repository';

@Module({
  imports: [UsuarioModule],
  controllers: [Produtocontroller],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
