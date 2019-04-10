import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerguntaRoutingModule } from './pergunta-routing.module';
import { ListPerguntaComponent } from './list-pergunta/list-pergunta.component';
import {CicloModule} from '../ciclo/ciclo.module';

@NgModule({
  declarations: [ListPerguntaComponent],
  imports: [
    CommonModule,
    PerguntaRoutingModule,
    CicloModule
  ]
})
export class PerguntaModule { }
