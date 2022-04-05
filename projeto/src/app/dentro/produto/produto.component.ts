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

  menuicon() {

    if (document.getElementById('menuicon').style.height == '300px') {
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



    } else {
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

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    this.router.navigate(['/'])
  }
}
