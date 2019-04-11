import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormularioRoutingModule} from './formulario-routing.module';
import {ListFormularioComponent} from './list-formulario/list-formulario.component';
import {FormFormularioComponent} from './form-formulario/form-formulario.component';
import {FormsModule} from '@angular/forms';
import {ListPerguntaComponent} from './list-pergunta/list-pergunta.component';
import {CicloModule} from '../ciclo/ciclo.module';
import { FormPerguntaComponent } from './form-pergunta/form-pergunta.component';

@NgModule({
  declarations: [
    ListFormularioComponent,
    FormFormularioComponent,
    ListPerguntaComponent,
    FormPerguntaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormularioRoutingModule,
    CicloModule
  ]
})
export class FormularioModule {
}
