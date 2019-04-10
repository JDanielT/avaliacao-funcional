import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCicloComponent} from './list-ciclo/list-ciclo.component';
import {FormCicloComponent} from './form-ciclo/form-ciclo.component';

const routes: Routes = [
  {path: '', component: ListCicloComponent},
  {path: 'novo', component: FormCicloComponent},
  {path: ':id/editar', component: FormCicloComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicloRoutingModule {
}
