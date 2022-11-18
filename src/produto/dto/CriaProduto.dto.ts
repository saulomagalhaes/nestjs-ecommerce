import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CaracteristicaProdutoDTO {
  nome: string;
  descricao: string;
}

export class ImagemProdutoDTO {
  url: string;
  descricao: string;
}

export class CriaProdutoDTO {
  @IsNotEmpty()
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  valor: number;

  @IsNumber()
  @Min(0)
  quantidade: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty()
  categoria: string;
}
