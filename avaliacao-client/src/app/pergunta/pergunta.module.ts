import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerguntaRoutingModule } from './pergunta-routing.module';
import { ListPerguntaComponent } from './list-pergunta/list-pergunta.component';

@NgModule({
  declarations: [ListPerguntaComponent],
  imports: [
    CommonModule,
    PerguntaRoutingModule
  ]
})
export class PerguntaModule { }
