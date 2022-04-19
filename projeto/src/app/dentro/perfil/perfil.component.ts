import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  

  img64 = localStorage.getItem('img64')
  login = localStorage.getItem('login')
  nome = localStorage.getItem('nome')
  idPessoa = localStorage.getItem('ID');
  lista = [];
  quantidadereais = undefined;
  quantidadebtc = undefined;
  btcpreco = undefined;
  listamoeda = undefined;
  dinheiro = false

  ngOnInit() {
    fetch('/api/buscar_compra',
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


    fetch('/api/buscar_btc',
    {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idPessoa: this.idPessoa
      }),
    }).then(function (result) {
      return result.json();
    }).then((dados) => {
      console.log(dados.list)
      this.listamoeda = dados.list;
    }
    ).catch(function (erro) { console.log(erro); })
  }

   entraradmin(){
    this.router.navigate(['padaria/loginadmin'])
   }

   abrirmodal(){
     document.getElementById('modal').style.display = 'flex';
    }

    fecharmodal(){
      document.getElementById('modal').style.display = 'none';
    }

    converter(){
      fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
        .then((resultado) => {
            resultado.json().then((data) => {
                console.log(data.BTC.low);
                this.btcpreco = data.BTC.low * 1000;
                this.quantidadebtc = (this.quantidadereais / this.btcpreco).toPrecision(3);;

                this.addbtc(this.quantidadebtc);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });


    }

    addbtc(quantidadebtc){
      fetch('/api/adicionarmais_btc',
    {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idPessoa: this.idPessoa, valorAdd: quantidadebtc
      }),
    }).then(function (result) {
      return result.json();
    }).then((dados) => {
      this.dinheiro = true
      setTimeout(function () {
        document.location.reload();
      }, 50);
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
    this.router.navigate(['/'])
  }

}
