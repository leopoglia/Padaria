import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

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

   voltar(){
     this.router.navigate(['/padaria/perfil'])
   }

   logout(){
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    this.router.navigate(['/'])
  }

}
