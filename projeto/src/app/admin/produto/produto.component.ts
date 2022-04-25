import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nomeproduto = ""
  descricao = ""
  preco = ""
  img64 = localStorage.getItem('img64')
  foto = undefined
  img65 = undefined
  excluir = ""
  editar = ""

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img65 = reader.result;
    };
  }

  criarproduto() {
    fetch('/api/criar_produto',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            nome: this.nomeproduto, descricao: this.descricao, preco: this.preco, img: this.img65
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
      document.getElementById('alertasucesso').style.color = "white"
      document.getElementById('alertasucesso').style.width = "300px"

      setTimeout(function () {
        document.getElementById('alertasucesso').style.color = "transparent"
        document.getElementById('alertasucesso').style.width = "0px"
      }, 2000);
    }).catch(function (erro) {
      console.log(erro)
    })
    this.nomeproduto = ""
    this.descricao = ""
    this.preco = ""
    this.foto = undefined
  }

  excluirproduto() {
    fetch('/api/excluir_produto',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            ID: this.excluir
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
  }

  buscarProduto() {
    fetch('/api/buscar_produto_especifico',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            ID: this.excluir
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
      console.log(dados.list[0])
      this.nomeproduto = dados.list[0].NOME
      this.descricao = dados.list[0].DESCRICAO
      this.preco = dados.list[0].PRECO


    }).catch(function (erro) {
      console.log(erro)
    })
  }

  buscarProduto2() {
    fetch('/api/buscar_produto_especifico',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            ID: this.editar
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
      console.log(dados.list[0])
      this.nomeproduto = dados.list[0].NOME
      this.descricao = dados.list[0].DESCRICAO
      this.preco = dados.list[0].PRECO


    }).catch(function (erro) {
      console.log(erro)
    })
  }

  menuicon() {
    document.getElementById('menuicon').classList.toggle("menuicon2");
  }

  editarProduto() {

    fetch('/api/editar_produto_nome',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            ID: this.editar, nomeProduto: this.nomeproduto
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

    fetch('/api/editar_produto_descricao',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            ID: this.editar, descricaoProduto: this.descricao
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

    fetch('/api/editar_produto_preco',
    {
      method: 'POST',
      body: JSON.stringify(
        {
          ID: this.editar, precoProduto: this.preco
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

  this.nomeproduto = ""
  this.descricao = ""
  this.preco = ""
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
