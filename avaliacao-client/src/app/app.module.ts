import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';

import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';

import {ListCicloComponent} from './component/ciclo/list-ciclo/list-ciclo.component';
import {FormCicloComponent} from './component/ciclo/form-ciclo/form-ciclo.component';
import {ConsultaAvaliacaoComponent} from './component/consulta-avaliacao/consulta-avaliacao.component';
import {FooterComponent} from './component/footer/footer.component';
import {MenuComponent} from './component/menu/menu.component';
import {HeaderComponent} from './component/header/header.component';
import {ListResponsavelUnidadeComponent} from './component/responsavel-unidade/list-responsavel-unidade/list-responsavel-unidade.component';
import { ListLocalizacaoComponent } from './component/localizacao/list-localizacao/list-localizacao.component';
import { ServidorAutocompleteComponent } from './component/shared/servidor-autocomplete/servidor-autocomplete.component';
import { CicloSelectComponent } from './component/shared/ciclo-select/ciclo-select.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ConsultaAvaliacaoComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    ListCicloComponent,
    FormCicloComponent,
    ListResponsavelUnidadeComponent,
    ListLocalizacaoComponent,
    ServidorAutocompleteComponent,
    CicloSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
