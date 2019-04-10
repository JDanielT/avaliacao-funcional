import {Component} from '@angular/core';
import {AbstractFormComponent} from '../../shared-components/abstract/abstract-form-component';
import {Formulario, TIPO_FORMULARIO, TipoFormulario} from '../../core/model/formulario';
import {ActivatedRoute, Router} from '@angular/router';
import {FormularioService} from '../../core/service/formulario.service';

@Component({
  selector: 'app-form-formulario',
  templateUrl: './form-formulario.component.html',
  styleUrls: ['./form-formulario.component.css']
})
export class FormFormularioComponent extends AbstractFormComponent<Formulario> {

  tipos: TipoFormulario[];

  constructor(router: Router,
              actRoute: ActivatedRoute,
              private service: FormularioService) {
    super(router, actRoute, Formulario);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.tipos = TIPO_FORMULARIO;
  }

  getService(): FormularioService {
    return this.service;
  }

}
