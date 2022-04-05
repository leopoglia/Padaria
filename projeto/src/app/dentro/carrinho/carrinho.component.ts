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
      }
      ).catch(function (erro) { console.log(erro); })
  }


  
  img64 = localStorage.getItem('img64')
  nome = localStorage.getItem('login')

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
    if(document.getElementById('menuicon').style.height == '300px'){
      document.getElementById('menuicon').style.width = '0px';
      document.getElementById('menuicon').style.height = '0px';
      document.getElementById('menuicon').style.fontSize = '0px';
      document.getElementById('a').style.height = '0px';
      document.getElementById('a').style.width = '0px';
      document.getElementById('b').style.width = '0px';
      document.getElementById('b').style.width = '0px';
      document.getElementById('c').style.width = '0px';
      document.getElementById('c').style.width = '0px';
      document.getElementById('icona').style.width = '0px';
      document.getElementById('iconb').style.width = '0px';
      document.getElementById('iconc').style.width = '0px';
    }else{
      document.getElementById('menuicon').style.width = '200px';
      document.getElementById('menuicon').style.height = '300px';
      document.getElementById('menuicon').style.fontSize = '20px';
      document.getElementById('a').style.height = '100px';
      document.getElementById('b').style.height = '100px';
      document.getElementById('c').style.height = '100px';

      document.getElementById('a').style.width = '200px';
      document.getElementById('b').style.width = '200px';
      document.getElementById('c').style.width = '200px';
      document.getElementById('icona').style.width = '30px';
      document.getElementById('iconb').style.width = '30px';
      document.getElementById('iconc').style.width = '30px';
    }
  }

  logout(){
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    this.router.navigate(['/'])
  }

}
