import {Component} from '@angular/core';
import {AbstractListComponent} from '../../shared-components/abstract/abstract-list-component';
import {Pergunta} from '../../core/model/pergunta';
import {ActivatedRoute, Router} from '@angular/router';
import {PerguntaService} from '../../core/service/pergunta.service';
import {Formulario} from '../../core/model/formulario';
import {FormularioService} from '../../core/service/formulario.service';
import {Ciclo} from '../../core/model/ciclo';

@Component({
  selector: 'app-list-pergunta',
  templateUrl: './list-pergunta.component.html',
  styleUrls: ['./list-pergunta.component.css']
})
export class ListPerguntaComponent extends AbstractListComponent<Pergunta> {

  formulario: Formulario;
  ciclo: Ciclo;

  constructor(router: Router,
              private actRoute: ActivatedRoute,
              private service: PerguntaService,
              private formularioService: FormularioService) {
    super(router);
  }


  ngOnInit(): void {
    this.formularioService.getById(this.actRoute.snapshot.params.formularioId).subscribe(data => {
      this.formulario = data;
    });
  }

  getService(): PerguntaService {
    return this.service;
  }

  buscar(): void {
    this.getService().buscar(this.formulario.id, this.ciclo.id).subscribe(data => {
      this.setList(data);
    });
  }

}
