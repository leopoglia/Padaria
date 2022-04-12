import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminn',
  templateUrl: './adminn.component.html',
  styleUrls: ['./adminn.component.css']
})
export class AdminnComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  login= ""
  senha= ""

  ngOnInit() {
  }

  entrar(login, senha){
    if(login == 'admin' && senha == 'admin')
    this.router.navigate(['padaria/admin'])
   }

   voltar() {
    this.router.navigate(['/'])
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
