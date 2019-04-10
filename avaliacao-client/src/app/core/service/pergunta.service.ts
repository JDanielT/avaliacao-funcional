import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Pergunta} from '../model/pergunta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService extends AbstractService<Pergunta> {

  constructor(http: HttpClient) {
    super(http);
  }


  context(): string {
    return 'perguntas';
  }

  buscar(formId: number, cicloId: number): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(`${this.api}/${this.context()}/formulario/${formId}/ciclo/${cicloId}`);
  }

}
