import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router,) { }

  lista = [];
  idPessoa = localStorage.getItem('ID');
  listamoeda = undefined;
  total = undefined;
  i;


  ngOnInit() {
    fetch('/api/buscar_produto_carrinho',
      {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idPessoa: this.idPessoa
        }),
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.lista = dados.list;
        this.i = this.lista.length
      }
      ).catch(function (erro) { console.log(erro); })

      fetch('/api/buscar_total_carrinho',
      {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idPessoa: this.idPessoa
        }),
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.total = dados.list[0].PRECOTOTAL;
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


  
  img64 = localStorage.getItem('img64')
  nome = localStorage.getItem('login')

  comprarItems(){
    this.router.navigate(['/padaria/produtos'])
  }

  comprarItem(item){
    this.router.navigate(['/padaria/', item.ID_PRODUTO, 'compra'])
  }

   excluirproduto(item){
    fetch('/api/excluir_produto_carrinho',
    {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ID: item.ID
      }),
    }).then(function (result) {
      return result.json();
    }).then((dados) => {
      this.lista = dados.list;
    }
    ).catch(function (erro) { console.log(erro); })
    setTimeout(function () {
      document.location.reload();
    }, 50);
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
