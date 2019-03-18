import {Component, OnInit} from '@angular/core';
import {ServidorService} from '../../service/servidor.service';
import {API} from '../../app-api';
import {AvaliacaoService} from '../../service/avaliacao.service';
import {Avaliacao} from '../../model/avaliacao';
import {Tipo} from '../../model/formulario';
import {Ciclo} from '../../model/ciclo';
import {CicloService} from '../../service/ciclo.service';
import {Localizacao} from '../../model/localizacao';
import {LocalizacaoService} from '../../service/localizacao.service';

import swal from 'sweetalert2';

declare let $;

@Component({
  selector: 'app-consulta-avaliacao',
  templateUrl: './consulta-avaliacao.component.html',
  styleUrls: ['./consulta-avaliacao.component.css']
})
export class ConsultaAvaliacaoComponent {

  ciclo: number;
  servidor: number;

  avaliacoes: Avaliacao[];
  localizacao: Localizacao;

  Tipo = Tipo;

  constructor(private avaliacaoService: AvaliacaoService,
              private localizacaoService: LocalizacaoService) {
  }

  buscarAvaliacoes(): void {

    if (!this.ciclo || !this.servidor) {
      swal('Oops!', 'Selecione o ciclo e o servidor', 'warning');
      return;
    }

    this.avaliacaoService.buscar(this.ciclo, this.servidor).subscribe(data => {
      this.avaliacoes = data;
    }, () => {
      this.avaliacoes = undefined;
      swal('Oops!', 'Nenhuma avaliação encontrada', 'error');
    });

    this.localizacaoService.buscar(this.ciclo, this.servidor).subscribe(data => {
      this.localizacao = data;
    });

  }

  getIdCiclo(event): void {
    this.ciclo = event.id;
  }

  getIdServidor(event): void {
    this.servidor = event.id;
  }

  media(avaliacoes: Avaliacao[]): number {
    return avaliacoes.map(a => a.nota).reduce((anterior, atual) => anterior + atual) / avaliacoes.length;
  }

}
