import {BaseEntity} from './base-entity';
import {Ciclo} from './ciclo';
import {Unidade} from './unidade';
import {Servidor} from './servidor';

export class Localizacao implements BaseEntity {

  id: number;
  ciclo: Ciclo;
  unidade: Unidade;
  servidor: Servidor;

}
