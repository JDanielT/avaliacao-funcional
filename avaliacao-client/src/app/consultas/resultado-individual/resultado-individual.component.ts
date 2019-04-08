import {Component} from '@angular/core';
import {Avaliacao} from '../../core/model/avaliacao';
import {Localizacao} from '../../core/model/localizacao';
import {Tipo} from '../../core/model/formulario';
import {AvaliacaoService} from '../../core/service/avaliacao.service';
import {LocalizacaoService} from '../../core/service/localizacao.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-resultado-individual',
  templateUrl: './resultado-individual.component.html',
  styleUrls: ['./resultado-individual.component.css']
})
export class ResultadoIndividualComponent {

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
