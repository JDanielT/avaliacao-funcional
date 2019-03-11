import {BaseEntity} from './base-entity';
import {Pergunta} from './pergunta';
import {Avaliacao} from './avaliacao';

export class Resposta implements BaseEntity {

  id: number;
  pergunta: Pergunta;
  avaliacao: Avaliacao;
  valor: number;

}
