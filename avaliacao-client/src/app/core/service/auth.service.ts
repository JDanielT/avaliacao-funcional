import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CredenciaisAcesso} from '../model/credenciais-acesso';
import {API} from '../../app-api';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN = 'TOKEN';
  private headers = new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,
              private coockie: CookieService) {
  }

  login(credencial: CredenciaisAcesso, callback): void {
    this.http.post(API + '/login', JSON.stringify(credencial), {headers: this.headers, observe: 'response'})
      .subscribe(resp => {
        this.coockie.set(this.TOKEN, resp.headers.get('authorization'));
        callback(resp.status);
      }, resp => {
        callback(resp.status);
      });
  }

  logout(): void {
    this.coockie.delete(this.TOKEN);
  }

  getUsername(): string {
    return this.jwtHelper.decodeToken(this.getToken()).sub;
  }

  getToken(): string {
    return this.coockie.get(this.TOKEN);
  }

}
