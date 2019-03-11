import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Avaliacao} from '../model/avaliacao';
import {API} from '../app-api';
import {AbstractService} from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService extends AbstractService<Avaliacao> {

  constructor(http: HttpClient) {
    super(http);
  }

  context(): string {
    return 'avaliacoes';
  }

  buscar(ciclo: number, servidor: number): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(`${API}/${this.context()}/${ciclo}/${servidor}`);
  }

}
