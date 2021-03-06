import {Component} from '@angular/core';
import {AbstractFormComponent} from '../../shared-components/abstract/abstract-form-component';
import {Ciclo} from '../../core/model/ciclo';
import {ActivatedRoute, Router} from '@angular/router';
import {CicloService} from '../../core/service/ciclo.service';

@Component({
  selector: 'app-form-ciclo',
  templateUrl: './form-ciclo.component.html',
  styleUrls: ['./form-ciclo.component.css']
})
export class FormCicloComponent extends AbstractFormComponent<Ciclo> {

  constructor(router: Router,
              actRoute: ActivatedRoute,
              private service: CicloService) {
    super(router, actRoute, Ciclo);
  }

  getService(): CicloService {
    return this.service;
  }
}
