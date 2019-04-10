import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPerguntaComponent} from './list-pergunta/list-pergunta.component';

const routes: Routes = [
  {path: ':formularioId', component: ListPerguntaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerguntaRoutingModule { }
