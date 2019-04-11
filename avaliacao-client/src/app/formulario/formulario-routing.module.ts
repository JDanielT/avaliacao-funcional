import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListFormularioComponent} from './list-formulario/list-formulario.component';
import {FormFormularioComponent} from './form-formulario/form-formulario.component';
import {FormCicloComponent} from '../ciclo/form-ciclo/form-ciclo.component';
import {ListPerguntaComponent} from './list-pergunta/list-pergunta.component';

const routes: Routes = [
  {path: '', component: ListFormularioComponent},
  {path: 'novo', component: FormFormularioComponent},
  {path: ':id/editar', component: FormFormularioComponent},
  {path: ':formId/perguntas', component: ListPerguntaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule {
}
