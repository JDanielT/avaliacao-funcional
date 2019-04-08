import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResponsavelUnidadeRoutingModule} from './responsavel-unidade-routing.module';
import {ListResponsavelUnidadeComponent} from './list-responsavel-unidade/list-responsavel-unidade.component';
import {CicloModule} from '../ciclo/ciclo.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListResponsavelUnidadeComponent],
  imports: [
    ResponsavelUnidadeRoutingModule,
    CicloModule,
    FormsModule,
    CommonModule,
  ]
})
export class ResponsavelUnidadeModule {
}
