import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConsultaAvaliacaoComponent} from './component/consulta-avaliacao/consulta-avaliacao.component';
import {FooterComponent} from './component/footer/footer.component';
import {MenuComponent} from './component/menu/menu.component';
import {HeaderComponent} from './component/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ListCicloComponent } from './component/ciclo/list-ciclo/list-ciclo.component';
import { FormCicloComponent } from './component/ciclo/form-ciclo/form-ciclo.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ConsultaAvaliacaoComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    ListCicloComponent,
    FormCicloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
