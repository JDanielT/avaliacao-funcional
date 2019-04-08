import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidorRoutingModule } from './servidor-routing.module';
import {ServidorAutocompleteComponent} from './servidor-autocomplete/servidor-autocomplete.component';

@NgModule({
  declarations: [
    ServidorAutocompleteComponent
  ],
  imports: [
    CommonModule,
    ServidorRoutingModule
  ],
  exports: [
    ServidorAutocompleteComponent
  ]
})
export class ServidorModule { }
