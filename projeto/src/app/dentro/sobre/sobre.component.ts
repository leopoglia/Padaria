import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private router: Router) { }

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

  img64 = localStorage.getItem('img64')
  listamoeda = []
  idPessoa = localStorage.getItem('ID');


  menuicon(){
    document.getElementById('menuicon').classList.toggle("menuicon2");
  }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    localStorage.removeItem('admin');
    this.router.navigate(['/'])
  }

}


