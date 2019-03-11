import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Servidor} from '../model/servidor';
import {API} from '../app-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) {
  }

  buscar(nome: string): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${API}/servidores/${nome}`);
  }

}
