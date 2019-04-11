import {Component} from '@angular/core';
import {AbstractListComponent} from '../../shared-components/abstract/abstract-list-component';
import {Pergunta} from '../../core/model/pergunta';
import {ActivatedRoute, Router} from '@angular/router';
import {PerguntaService} from '../../core/service/pergunta.service';
import {Formulario} from '../../core/model/formulario';
import {FormularioService} from '../../core/service/formulario.service';
import {Ciclo} from '../../core/model/ciclo';
import swal from 'sweetalert2';

declare let $: any;

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
    this.formularioService.getById(this.actRoute.snapshot.params.formId).subscribe(data => {
      this.formulario = data;
    });
  }

  getService(): PerguntaService {
    return this.service;
  }

  getIdCiclo(event): void {
    this.ciclo = new Ciclo();
    this.ciclo.id = event.id;
  }

  buscarPerguntas(): void {
    if (this.formulario && this.ciclo) {
      this.getService().buscar(this.formulario.id, this.ciclo.id).subscribe(data => {
        this.setList(data);
      }, err => {
        this.setList(undefined);
        swal('Oops!', 'Nenhuma informação encontrada', 'warning');
      });
    }
  }

}
