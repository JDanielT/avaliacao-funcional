import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/service/auth.service';
import {Router} from '@angular/router';
import {ServidorService} from '../../core/service/servidor.service';
import {Servidor} from '../../core/model/servidor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  servidor: Servidor;

  constructor(private servidorService: ServidorService,
              private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.servidorService.buscar(this.auth.getUsername()).subscribe(data => {
      this.servidor = data;
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
