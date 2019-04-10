import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { ListFormularioComponent } from './list-formulario/list-formulario.component';
import { FormFormularioComponent } from './form-formulario/form-formulario.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListFormularioComponent, FormFormularioComponent],
  imports: [
    FormsModule,
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
