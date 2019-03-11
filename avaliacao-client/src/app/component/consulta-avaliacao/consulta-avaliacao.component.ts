import {Component, OnInit} from '@angular/core';
import {ServidorService} from '../../service/servidor.service';
import {API} from '../../app-api';
import {AvaliacaoService} from '../../service/avaliacao.service';
import {Avaliacao} from '../../model/avaliacao';
import {Tipo} from '../../model/formulario';
import {Ciclo} from '../../model/ciclo';
import {CicloService} from '../../service/ciclo.service';

declare let $;

@Component({
  selector: 'app-consulta-avaliacao',
  templateUrl: './consulta-avaliacao.component.html',
  styleUrls: ['./consulta-avaliacao.component.css']
})
export class ConsultaAvaliacaoComponent implements OnInit {

  ciclo: number;
  servidor: number;

  ciclos: Ciclo[];
  avaliacoes: Avaliacao[];

  Tipo = Tipo;

  constructor(private servidorService: ServidorService,
              private avaliacaoService: AvaliacaoService,
              private cicloService: CicloService) {
  }

  ngOnInit() {
    this.buscarCiclos();
    this.autocomplete();
  }

  buscarCiclos(): void {
    this.cicloService.findAll().subscribe(data => {
      this.ciclos = data;
    });
  }

  buscarAvaliacoes(): void {

    if (!this.servidor || !this.ciclo) {
      alert('Avaliação ou servidor não selecionado');
      return;
    }

    this.avaliacaoService.buscar(this.ciclo, this.servidor).subscribe(data => {
      this.avaliacoes = data;
    }, () => {
      this.avaliacoes = undefined;
      alert('Nenhuma avaliação encontrada');
    });

  }

  media(avaliacoes: Avaliacao[]): number {
    return avaliacoes.map(a => a.nota).reduce((anterior, atual) => anterior + atual) / avaliacoes.length;
  }

  autocomplete(): void {

    const input = $('.autocomplete');
    input.autocomplete({
      source: (request, response) => {
        $.ajax({
          url: `${API}/servidores/${request.term}`,
          dataType: 'json',
          success: (data) => {
            response($.map(data, (item) => {
              return {
                label: `${item.siape} - ${item.nome}`,
                value: item.id
              };
            }));
          }
        });
      },
      select: (event, ui) => {
        input.val(ui.item.label);
        this.servidor = ui.item.value;
        return false;
      },
      focus: (event, ui) => {
        input.val(ui.item.label);
        this.servidor = ui.item.value;
        return false;
      }
    });

  }

}
