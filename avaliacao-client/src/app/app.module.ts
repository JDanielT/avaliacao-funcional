import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';

import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {FooterComponent} from './shared-components/footer/footer.component';
import {MenuComponent} from './shared-components/menu/menu.component';
import {HeaderComponent} from './shared-components/header/header.component';
import {AdminComponent} from './shared-components/admin/admin.component';
import {ReportComponent} from './shared-components/report/report.component';
import {LoginComponent} from './shared-components/login/login.component';
import {CookieService} from 'ngx-cookie-service';
import {AppInterceptor} from './app-interceptor';
import {ForbiddenComponent} from './shared-components/forbidden/forbidden.component';
import {HomeComponent} from './shared-components/home/home.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    AdminComponent,
    ReportComponent,
    LoginComponent,
    ForbiddenComponent,
    HomeComponent
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
  providers: [
    CookieService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
