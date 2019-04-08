import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ResponsavelUnidade} from 'src/app/core/model/responsavel-unidade';
import {AbstractListComponent} from '../../shared-components/abstract/abstract-list-component';
import {ResponsavelUnidadeService} from 'src/app/core/service/responsavel-unidade.service';
import {Ciclo} from 'src/app/core/model/ciclo';
import {CicloService} from 'src/app/core/service/ciclo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-responsavel-unidade',
  templateUrl: './list-responsavel-unidade.component.html',
  styleUrls: ['./list-responsavel-unidade.component.css']
})
export class ListResponsavelUnidadeComponent extends AbstractListComponent<ResponsavelUnidade> {

  ciclo: number;

  constructor(router: Router,
              private cicloService: CicloService,
              private service: ResponsavelUnidadeService) {
    super(router);
  }

  getService(): ResponsavelUnidadeService {
    return this.service;
  }

  ngOnInit(): void {
  }

  buscarResponsaveis(): void {
    if (!this.ciclo) {
      swal('Oops!', 'Selecione o ciclo', 'warning');
      return;
    }
    this.service.buscar(this.ciclo).subscribe(data => {
      this.setList(data as ResponsavelUnidade[]);
      this.initTable();
    }, err => {
      swal('Oops!', 'Nenhuma informação encontrada', 'warning');
      this.setList(undefined);
    });
  }

  getIdCiclo(event): void {
    this.ciclo = event.id;
  }

}
