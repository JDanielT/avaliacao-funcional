import {BaseEntity} from './base-entity';

export class Formulario implements BaseEntity {

  id: number;
  descricao: string;
  tipo: TipoFormulario;

}

export enum TipoFormulario {

  AUTO_AVALIACAO_SEM_FUNCAO_GERENCIAL  = 'Auto avaliação - Sem função gerencial',
  AUTO_AVALIACAO_COM_FUNCAO_GERENCIAL = 'Auto avaliação - Com função gerencial',

  SERVIDORES_PELA_CHEFIA_SEM_FUNCAO_GERENCIAL = 'Servidores pela chefia - Sem função gerencial',
  SERVIDORES_PELA_CHEFIA_COM_FUNCAO_GERENCIAL = 'Servidores pela chefia - Com função gerencial'

}

export const TIPO_FORMULARIO: TipoFormulario[] = Object.values(TipoFormulario).filter(x => typeof x === 'string');


