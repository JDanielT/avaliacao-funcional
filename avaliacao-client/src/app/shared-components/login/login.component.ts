import { Component, OnInit } from '@angular/core';
import {CredenciaisAcesso} from '../../core/model/credenciais-acesso';
import {AuthService} from '../../core/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  credenciais = new CredenciaisAcesso();

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(): void {

    this.auth.login(this.credenciais, (status) => {
      if (status === 200) {
        this.router.navigate(['/home']);
        return;
      }
      this.error = 'Usuário ou senha incorreta!';
    });

  }

}
