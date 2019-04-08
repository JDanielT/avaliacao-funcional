import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import {ResultadoIndividualComponent} from './resultado-individual/resultado-individual.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ResultadoIndividualComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
