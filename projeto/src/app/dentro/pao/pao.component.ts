import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pao',
  templateUrl: './pao.component.html',
  styleUrls: ['./pao.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PaoComponent implements OnInit {

  constructor(private router: Router
  ) { }


  img64 = localStorage.getItem('img64')
  lista = [];
  valor = "";
  idPessoa = localStorage.getItem('ID');
  listamoeda = undefined;
  procura = undefined;
  
  comprarItem(item) {
    this.router.navigate(['/padaria/', item.ID])
  }

  ngOnInit() {

    fetch('/api/buscar_produto',
      {
        method: 'POST', headers: { 'Content-Type': 'application/json' }
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.lista = dados.list;
      }
      ).catch(function (erro) { console.log(erro); })
      
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

  procurar(){
    fetch('/api/buscar_pesquisa',
      {
        method: 'POST', 
        body: JSON.stringify({
          pesquisa: this.procura
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.lista = dados.list;
      }
      ).catch(function (erro) { console.log(erro); })
      
  }

  menuicon(){
    document.getElementById('menuicon').classList.toggle("menuicon2");
  }
  
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    this.router.navigate(['/'])
  }




}
