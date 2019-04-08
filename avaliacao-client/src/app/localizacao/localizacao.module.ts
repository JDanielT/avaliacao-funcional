import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocalizacaoRoutingModule} from './localizacao-routing.module';
import {ListLocalizacaoComponent} from './list-localizacao/list-localizacao.component';
import {FormsModule} from '@angular/forms';
import {CicloModule} from '../ciclo/ciclo.module';
import {ServidorModule} from '../servidor/servidor.module';

@NgModule({
  declarations: [
    ListLocalizacaoComponent
  ],
  imports: [
    LocalizacaoRoutingModule,
    ServidorModule,
    CicloModule,
    FormsModule,
    CommonModule
  ]
})
export class LocalizacaoModule { }
