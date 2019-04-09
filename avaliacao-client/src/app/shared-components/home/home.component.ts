import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/service/auth.service';
import {Servidor} from '../../core/model/servidor';
import {ServidorService} from '../../core/service/servidor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servidor: Servidor;

  constructor(private auth: AuthService,
              private servidorService: ServidorService) { }

  ngOnInit() {
    this.servidorService.buscar(this.auth.getUsername()).subscribe(data => {
      this.servidor = data;
    });
  }

}
