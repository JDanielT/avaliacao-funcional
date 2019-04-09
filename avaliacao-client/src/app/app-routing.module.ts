import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './shared-components/admin/admin.component';
import {LoginComponent} from './shared-components/login/login.component';
import {ForbiddenComponent} from './shared-components/forbidden/forbidden.component';
import {HomeComponent} from './shared-components/home/home.component';


const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {
      path: '', component: AdminComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'ciclos', loadChildren: './ciclo/ciclo.module#CicloModule'},
        {path: 'consultas', loadChildren: './consultas/consultas.module#ConsultasModule'},
        {path: 'localizacoes', loadChildren: './localizacao/localizacao.module#LocalizacaoModule'},
        {path: 'responsaveis', loadChildren: './responsavel-unidade/responsavel-unidade.module#ResponsavelUnidadeModule'}

      ]
    },
    {path: 'forbidden', component: ForbiddenComponent},

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
