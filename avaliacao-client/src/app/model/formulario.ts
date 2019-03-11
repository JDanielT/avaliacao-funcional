import {BaseEntity} from './base-entity';

export class Formulario implements BaseEntity {

  id: number;
  descricao: string;
  tipo: Tipo;

}

export enum Tipo {

  AUTO_AVALIACAO_CD = 'Auto avaliação - CD',
  AUTO_AVALIACAO_FG = 'Auto avaliação - FG',
  AUTO_AVALIACAO_SEM_FUNCAO_GERENCIAL  = 'Auto avaliação - Sem função gerencial',
  AUTO_AVALIACAO_COM_FUNCAO_GERENCIAL_MIGRADO = 'Auto avaliação - Com função gerencial (MIGRADO)',

  SERVIDORES_PELA_CHEFIA_CD = 'Servidores pela chefia - CD',
  SERVIDORES_PELA_CHEFIA_FG = 'Servidores pela chefia - FG',
  SERVIDORES_PELA_CHEFIA_SEM_FUNCAO_GERENCIAL = 'Servidores pela chefia - Sem função gerencial',
  SERVIDORES_PELA_CHEFIA_COM_FUNCAO_GERENCIAL_MIGRADO = 'Servidores pela chefia - Com função gerencial (MIGRADO)'

}


