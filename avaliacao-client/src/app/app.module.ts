import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {ListCicloComponent} from './component/ciclo/list-ciclo/list-ciclo.component';
import {FormCicloComponent} from './component/ciclo/form-ciclo/form-ciclo.component';
import {ConsultaAvaliacaoComponent} from './component/consulta-avaliacao/consulta-avaliacao.component';
import {FooterComponent} from './component/footer/footer.component';
import {MenuComponent} from './component/menu/menu.component';
import {HeaderComponent} from './component/header/header.component';
import { ListResponsavelUnidadeComponent } from './component/responsavel-unidade/list-responsavel-unidade/list-responsavel-unidade.component';


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
    ListResponsavelUnidadeComponent
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
