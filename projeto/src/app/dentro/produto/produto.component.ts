import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  

  id = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.paramMap.get('id');
  }

  lista = [];
  lista2 = [];
  listacoment = [];
  img64 = localStorage.getItem('img64');
  idPessoa = localStorage.getItem('ID');
  comentario = undefined;
  listamoeda = undefined;


  ngOnInit() {
    
    fetch('/api/buscar_produto',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.lista2 = dados.list;
      }
      ).catch(function (erro) { console.log(erro); })

    fetch('/api/buscar_produto_especifico',
      {
        method: 'POST',
        body: JSON.stringify({
          ID: this.id
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.lista = dados.list;
      }
      ).catch(function (erro) { console.log(erro); })

    fetch('/api/buscar_comentario',
      {
        method: 'POST',
        body: JSON.stringify({
          idProduto: this.id
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(function (result) {
        return result.json();
      }).then((dados) => {
        this.listacoment = dados.list;
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

  enviarCarrinho(item) {
    fetch('/api/adicionar_produto_carrinho', { method: 'POST', body: JSON.stringify({ idProduto: this.id, idPessoa: this.idPessoa }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(function (dados) { console.log(dados) }).catch(function (erro) { console.log(erro); })
    this.router.navigate(['/padaria/carrinho'])
  }

  verItem(item) {
    this.router.navigate(['/padaria/', item.ID])

    setTimeout(function () {
      document.location.reload();
    }, 50);
  }

  comprarItem(item){
    this.router.navigate(['/padaria/', item.ID, 'compra'])
  }

  enviarComentario() {
    if(this.comentario == "" || this.comentario == undefined || this.comentario == " "){
      return
    }else{
    fetch('/api/criar_comentario',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            comentario: this.comentario, id: this.idPessoa, idProduto: this.id
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
    }).catch(function (erro) {
      console.log(erro)
    })
    setTimeout(function () {
      document.location.reload();
    }, 50);
    }
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
