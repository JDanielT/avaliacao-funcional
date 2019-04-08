import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {ResponsavelUnidade} from '../model/responsavel-unidade';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../../app-api';


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

  buscar(ciclo: number): Observable<ResponsavelUnidade[]> {
    return this.http.get<ResponsavelUnidade[]>(`${API}/${this.context()}/ciclo/${ciclo}`);
  }

}
