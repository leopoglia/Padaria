import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService) {
  }

  login = ""
  senha = ""
  ID = ""

  ngOnInit() {
  }



  voltar() {
    this.router.navigate(['/'])
  }

  entrar() {
    fetch('/api/login',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            nickname: this.login, password: this.senha
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
        localStorage.setItem('img64', dados.user.IMG);
        localStorage.setItem('login', this.login);
        localStorage.setItem('senha', this.senha);
        localStorage.setItem('ID', dados.user.ID)
        this.router.navigate(['/padaria'])
    }).catch(function (erro) {
      
      document.getElementById('alertaerro').style.color = "white"
      document.getElementById('alertaerro').style.width = "300px"

      setTimeout(function () {
        document.getElementById('alertaerro').style.color = "transparent"
        document.getElementById('alertaerro').style.width = "0px"
      }, 2000);
    })
  }

  loginn() {
    document.getElementById('spansenha').style.fontSize = '0px';
    document.getElementById('spanlogin').style.fontSize = '15px';
  }

  senhaa() {
    document.getElementById('spanlogin').style.fontSize = '0px';
    document.getElementById('spansenha').style.fontSize = '15px';
  }

}
