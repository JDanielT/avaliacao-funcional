import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListResponsavelUnidadeComponent} from './list-responsavel-unidade/list-responsavel-unidade.component';

const routes: Routes = [
  {path: '', component: ListResponsavelUnidadeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsavelUnidadeRoutingModule { }
