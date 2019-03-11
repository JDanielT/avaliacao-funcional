import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsultaAvaliacaoComponent} from './component/consulta-avaliacao/consulta-avaliacao.component';
import {ListCicloComponent} from './component/ciclo/list-ciclo/list-ciclo.component';
import {FormCicloComponent} from './component/ciclo/form-ciclo/form-ciclo.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', component: ConsultaAvaliacaoComponent},
  {path: 'ciclos', component: ListCicloComponent},
  {path: 'ciclos/novo', component: FormCicloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
