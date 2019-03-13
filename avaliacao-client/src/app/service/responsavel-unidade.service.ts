import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { ResponsavelUnidade } from '../model/responsavel-unidade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelUnidadeService extends AbstractService<ResponsavelUnidade> {

  constructor(http: HttpClient) { 
    super(http);
  }

  context(): string {
    return 'responsaveis-unidades';
  }

}
