import {Component, Input} from '@angular/core';
import {Ciclo} from '../../core/model/ciclo';
import {Formulario} from '../../core/model/formulario';
import {AbstractFormComponent} from '../../shared-components/abstract/abstract-form-component';
import {Pergunta} from '../../core/model/pergunta';
import {ActivatedRoute, Router} from '@angular/router';
import {PerguntaService} from '../../core/service/pergunta.service';

@Component({
  selector: 'app-form-pergunta',
  templateUrl: './form-pergunta.component.html',
  styleUrls: ['./form-pergunta.component.css']
})
export class FormPerguntaComponent extends AbstractFormComponent<Pergunta> {

  @Input() ciclo: Ciclo;
  @Input() formulario: Formulario;

  constructor(router: Router,
              actRoute: ActivatedRoute,
              private service: PerguntaService) {
    super(router, actRoute, Pergunta);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getService(): PerguntaService {
    return this.service;
  }

}
