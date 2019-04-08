import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './shared-components/admin/admin.component';


const routes: Routes = [

  {
    path: '', component: AdminComponent, children: [
      {path: 'ciclos', loadChildren: './ciclo/ciclo.module#CicloModule'},
      {path: 'consultas', loadChildren: './consultas/consultas.module#ConsultasModule' },
      {path: 'localizacoes', loadChildren: './localizacao/localizacao.module#LocalizacaoModule'},
      {path: 'responsaveis', loadChildren: './responsavel-unidade/responsavel-unidade.module#ResponsavelUnidadeModule'}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
