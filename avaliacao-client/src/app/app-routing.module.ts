import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './shared-components/admin/admin.component';
import {LoginComponent} from './shared-components/login/login.component';
import {ForbiddenComponent} from './shared-components/forbidden/forbidden.component';
import {HomeComponent} from './shared-components/home/home.component';
import {AppGuard} from './app.guard';


const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {
      path: '', component: AdminComponent, canActivate: [AppGuard], children: [
        {path: 'home', component: HomeComponent, canActivate: [AppGuard]},
        {path: 'ciclos', loadChildren: './ciclo/ciclo.module#CicloModule', canActivate: [AppGuard]},
        {path: 'consultas', loadChildren: './consultas/consultas.module#ConsultasModule', canActivate: [AppGuard]},
        {path: 'formularios', loadChildren: './formulario/formulario.module#FormularioModule', canActivate: [AppGuard]},
        {path: 'localizacoes', loadChildren: './localizacao/localizacao.module#LocalizacaoModule', canActivate: [AppGuard]},
        {path: 'perguntas', loadChildren: './pergunta/pergunta.module#PerguntaModule', canActivate: [AppGuard]},
        {path: 'responsaveis', loadChildren: './responsavel-unidade/responsavel-unidade.module#ResponsavelUnidadeModule', canActivate: [AppGuard]}
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
