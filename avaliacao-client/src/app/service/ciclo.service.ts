import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Ciclo} from '../model/ciclo';

@Injectable({
  providedIn: 'root'
})
export class CicloService extends AbstractService<Ciclo> {

  constructor(http: HttpClient) {
    super(http);
  }

  context(): string {
    return 'ciclos';
  }

}
