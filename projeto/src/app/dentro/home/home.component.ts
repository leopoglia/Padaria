import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
  }

  img64 = localStorage.getItem('img64');
  idPessoa = localStorage.getItem('ID');
  listamoeda = undefined;


  ngOnInit() {
    fetch('/api/buscar_btc',
    {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idPessoa: this.idPessoa
      }),
    }).then(function (result) {
      return result.json();
    }).then((dados) => {
      this.listamoeda = dados.list;
    }
    ).catch(function (erro) { console.log(erro); })
  }

  menuicon(){
    document.getElementById('menuicon').classList.toggle("menuicon2");
  }

  logout(){
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    localStorage.removeItem('admin');
    this.router.navigate(['/'])
  }

}
