import {BaseEntity} from './base-entity';
import {Ciclo} from './ciclo';
import {Formulario} from './formulario';

export class Pergunta implements BaseEntity {

  id: number;
  ciclo: Ciclo;
  formulario: Formulario;
  descricao: string;

}
