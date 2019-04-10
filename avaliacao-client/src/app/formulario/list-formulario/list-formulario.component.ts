import {Component} from '@angular/core';
import {AbstractListComponent} from '../../shared-components/abstract/abstract-list-component';
import {Formulario} from '../../core/model/formulario';
import {FormularioService} from '../../core/service/formulario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-formulario',
  templateUrl: './list-formulario.component.html',
  styleUrls: ['./list-formulario.component.css']
})
export class ListFormularioComponent extends AbstractListComponent<Formulario> {

  constructor(private service: FormularioService, router: Router) {
    super(router);
  }

  getService(): FormularioService {
    return this.service;
  }

}
