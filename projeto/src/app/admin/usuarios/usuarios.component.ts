import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    fetch('/api/buscar_usuario_admin',
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
  lista = [];
  idPessoa = localStorage.getItem('ID');
  listamoeda = undefined;
  nomePessoa = undefined;

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

  ordernarico(){
    fetch('/api/buscar_usuario_rico',
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

  ordernanomeasc(){
    fetch('/api/buscar_usuario_nome_asc',
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

  ordernanomedesc(){
    fetch('/api/buscar_usuario_nome_desc',
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

  buscarPessoa(){
    fetch('/api/buscar_usuario_admin_search',
    {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: this.nomePessoa
      }),
    }).then(function (result) {
      return result.json();
    }).then((dados) => {
      this.lista = dados.list;
    }
    ).catch(function (erro) { console.log(erro); })
  }
}
