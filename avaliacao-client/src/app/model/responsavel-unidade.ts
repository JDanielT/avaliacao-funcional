import { BaseEntity } from './base-entity';
import { Unidade } from './unidade';
import { Servidor } from './servidor';
import { Ciclo } from './ciclo';

export class ResponsavelUnidade implements BaseEntity {

    id: number;
    unidade: Unidade;
    servifor: Servidor;
    ciclo: Ciclo;

}
