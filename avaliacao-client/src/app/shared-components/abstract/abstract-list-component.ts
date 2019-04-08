import {Router} from '@angular/router';
import {BaseEntity} from '../../core/model/base-entity';
import {OnInit} from '@angular/core';
import {AbstractService} from '../../core/service/abstract.service';
import swal from 'sweetalert2';

declare let $: any;

export abstract class AbstractListComponent<T extends BaseEntity> implements OnInit {

  private list: T[];

  constructor(protected router: Router) {
  }

  abstract getService(): AbstractService<T>;

  ngOnInit(): void {
    this.getService().findAll().subscribe(data => {
      this.list = data as T[];
      this.initTable();
    });
  }

  getList(): T[] {
    return this.list;
  }

  setList(list: T[]): void {
    this.list = list;
  }

  add(): void {
    this.router.navigate([`${this.getService().context()}/novo`]);
  }

  update(entity: T): void {
    this.router.navigate([`${this.getService().context()}/${entity.id}/editar`]);
  }

  delete(entity: T): void {
    swal({
      title: 'Deseja excluir esse registro?',
      text: 'isso não pode ser desfeito',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonText: 'Não',
      focusCancel: true,
      type: 'question'
    }).then(choose => {
      if (choose.value) {
        this.getService().delete(entity.id).subscribe(data => {
          this.list = this.list.filter(item => item.id !== entity.id);
        });
      }
    });
  }

  public initTable(): void {
    $(document).ready(() => {

      if ($.fn.DataTable.isDataTable('.table')) {
        $('.table').dataTable().fnDestroy();
      }

      $('.table').DataTable({
        'ordering': false,
        'language': {
          'sEmptyTable': 'Nenhum registro encontrado',
          'sProcessing': 'A processar...',
          'sLengthMenu': 'Mostrar _MENU_ registos',
          'sZeroRecords': 'Não foram encontrados resultados',
          'sInfo': 'Mostrando de _START_ até _END_ de _TOTAL_ registos',
          'sInfoEmpty': 'Mostrando de 0 até 0 de 0 registos',
          'sInfoFiltered': '(filtrado de _MAX_ registos no total)',
          'sInfoPostFix': '',
          'sSearch': 'Procurar:',
          'sUrl': '',
          'oPaginate': {
            'sFirst': 'Primeiro',
            'sPrevious': 'Anterior',
            'sNext': 'Seguinte',
            'sLast': 'Último'
          },
          'oAria': {
            'sSortAscending': ': Ordenar colunas de forma ascendente',
            'sSortDescending': ': Ordenar colunas de forma descendente'
          }
        }
      });
    });
  }

}

