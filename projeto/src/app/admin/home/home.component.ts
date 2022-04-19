import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  img64 = localStorage.getItem('img64');
  login = localStorage.getItem('login');
  nome = localStorage.getItem('nome');
  idPessoa = localStorage.getItem('ID');
  listamoeda = undefined;


  ngOnInit() {
   
  }

  menuicon(){
    document.getElementById('menuicon').classList.toggle("menuicon2");
  }

  logout(){
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    this.router.navigate(['/'])
  }

}
