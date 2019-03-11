import {Injectable} from '@angular/core';
import {BaseEntity} from '../model/base-entity';
import {API} from '../app-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T extends BaseEntity> {

  protected api = API;
  protected header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(protected http: HttpClient) {
  }

  abstract context(): string;

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.api}/${this.context()}`, {headers: this.header});
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.api}/${this.context()}/${id}`, {headers: this.header});
  }

  save(entity: T): Observable<T> {
    return this.http.post<T>(`${this.api}/${this.context()}`, entity, {headers: this.header});
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.api}/${this.context()}/${id}`, {headers: this.header});
  }

}
