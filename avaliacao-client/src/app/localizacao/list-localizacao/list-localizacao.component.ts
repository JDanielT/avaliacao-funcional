import {Component} from '@angular/core';
import {AbstractListComponent} from '../../shared-components/abstract/abstract-list-component';
import {Localizacao} from '../../core/model/localizacao';
import {Router} from '@angular/router';
import {LocalizacaoService} from '../../core/service/localizacao.service';
import {CicloService} from '../../core/service/ciclo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-localizacao',
  templateUrl: './list-localizacao.component.html',
  styleUrls: ['./list-localizacao.component.css']
})
export class ListLocalizacaoComponent extends AbstractListComponent<Localizacao> {

  ciclo: number;
  servidor: number;

  localizacao: Localizacao;

  constructor(router: Router,
              private service: LocalizacaoService,
              private cicloService: CicloService) {
    super(router);
  }

  ngOnInit() {
  }

  getService(): LocalizacaoService {
    return this.service;
  }

  buscarLocalizacao(): void {
    if (!this.ciclo) {
      swal('Oops!', 'Selecione o ciclo', 'warning');
      return;
    }
    this.service.buscar(this.ciclo, this.servidor).subscribe(data => {
      this.localizacao = data;
    }, err => {
      swal('Oops!', 'Nenhuma informação encontrada', 'warning');
      this.setList(undefined);
    });
  }

  getIdCiclo(event): void {
    this.ciclo = event.id;
  }

  getIdServidor(event): void {
    this.servidor = event.id;
  }

}
