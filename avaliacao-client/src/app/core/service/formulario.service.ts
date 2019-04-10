import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Formulario} from '../model/formulario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService extends AbstractService<Formulario> {

  constructor(http: HttpClient) {
    super(http);
  }

  context(): string {
    return 'formularios';
  }

}
