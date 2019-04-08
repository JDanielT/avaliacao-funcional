import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListLocalizacaoComponent} from './list-localizacao/list-localizacao.component';

const routes: Routes = [
  {path: '', component: ListLocalizacaoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizacaoRoutingModule {
}
