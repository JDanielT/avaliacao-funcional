import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsavelUnidade } from 'src/app/model/responsavel-unidade';
import { AbstractListComponent } from '../../abstract/abstract-list-component';
import { ResponsavelUnidadeService } from 'src/app/service/responsavel-unidade.service';

@Component({
  selector: 'app-list-responsavel-unidade',
  templateUrl: './list-responsavel-unidade.component.html',
  styleUrls: ['./list-responsavel-unidade.component.css']
})
export class ListResponsavelUnidadeComponent extends AbstractListComponent<ResponsavelUnidade> {

  constructor(router: Router,
              private service: ResponsavelUnidadeService) {
    super(router);
  }

  getService(): ResponsavelUnidadeService {
    return this.service;
  }

}
