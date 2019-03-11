import {BaseEntity} from './base-entity';

export class Ciclo implements BaseEntity {

  id: number;
  descricao: string;
  exercicio: number;
  inicio: Date;
  fim: Date;

}
