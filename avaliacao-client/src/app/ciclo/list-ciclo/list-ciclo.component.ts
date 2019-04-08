import { Component, OnInit } from '@angular/core';
import {AbstractListComponent} from '../../shared-components/abstract/abstract-list-component';
import {Ciclo} from '../../core/model/ciclo';
import {Router} from '@angular/router';
import {CicloService} from '../../core/service/ciclo.service';

@Component({
  selector: 'app-list-ciclo',
  templateUrl: './list-ciclo.component.html',
  styleUrls: ['./list-ciclo.component.css']
})
export class ListCicloComponent extends AbstractListComponent<Ciclo> {

  constructor(router: Router,
              private service: CicloService) {
    super(router);
  }

  getService(): CicloService {
    return this.service;
  }

}
