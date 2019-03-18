import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultaAvaliacaoComponent} from './component/consulta-avaliacao/consulta-avaliacao.component';
import {ListCicloComponent} from './component/ciclo/list-ciclo/list-ciclo.component';
import {FormCicloComponent} from './component/ciclo/form-ciclo/form-ciclo.component';
import {ListResponsavelUnidadeComponent} from './component/responsavel-unidade/list-responsavel-unidade/list-responsavel-unidade.component';
import {ListLocalizacaoComponent} from './component/localizacao/list-localizacao/list-localizacao.component';

const routes: Routes = [

  {path: 'ciclos', component: ListCicloComponent},
  {path: 'ciclos/novo', component: FormCicloComponent},
  {path: 'ciclos/:id/editar', component: FormCicloComponent},
  {path: 'responsaveis', component: ListResponsavelUnidadeComponent},
  {path: 'localizacoes', component: ListLocalizacaoComponent},
  {path: 'resultado-individual', component: ConsultaAvaliacaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
