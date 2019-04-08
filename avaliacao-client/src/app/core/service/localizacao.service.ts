import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Localizacao} from '../model/localizacao';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../../app-api';


@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService extends AbstractService<Localizacao> {

  constructor(http: HttpClient) {
    super(http);
  }

  context(): string {
    return 'localizacoes';
  }

  buscar(ciclo: number, servidor: number): Observable<Localizacao> {
    return this.http.get<Localizacao>(`${API}/${this.context()}/${ciclo}/${servidor}`);
  }

}
