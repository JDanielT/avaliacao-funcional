import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CicloRoutingModule} from './ciclo-routing.module';
import {FormCicloComponent} from './form-ciclo/form-ciclo.component';
import {ListCicloComponent} from './list-ciclo/list-ciclo.component';
import {FormsModule} from '@angular/forms';
import {CicloSelectComponent} from './ciclo-select/ciclo-select.component';

@NgModule({
  declarations: [
    FormCicloComponent,
    ListCicloComponent,
    CicloSelectComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CicloRoutingModule
  ],
  exports: [
    CicloSelectComponent
  ]
})
export class CicloModule {
}
