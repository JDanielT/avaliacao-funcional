import {BaseEntity} from './base-entity';
import {Servidor} from './servidor';
import {Formulario} from './formulario';
import {Ciclo} from './ciclo';

export class Avaliacao implements BaseEntity {

  id: number;
  ciclo: Ciclo;
  formulario: Formulario;
  avaliado: Servidor;
  avaliador: Servidor;
  nota: number;

}
