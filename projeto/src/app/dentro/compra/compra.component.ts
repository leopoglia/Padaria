import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.paramMap.get('id');
   }
  

  ngOnInit() {
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

  img64 = localStorage.getItem('img64');
  idPessoa = localStorage.getItem('ID');
  id = undefined;
  listamoeda = undefined;
  CEP = '';
  estado = '';
  cidade = '';
  bairro = '';
  RUA = '';
  lista = [];


  buscarcep(){
    fetch('https://viacep.com.br/ws/' + this.CEP + '/json/')
        .then((resultado) => {
            resultado.json().then((data) => {
                this.estado = data.uf
                this.cidade = data.localidade
                this.bairro = data.bairro
                this.RUA = data.logradouro
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
  }

  comprar(item) {
    if(this.listamoeda[0].VALORUSD > item.PRECO){ 
    fetch('/api/adicionar_compra', { method: 'POST', body: JSON.stringify({ idProduto: this.id, idPessoa: this.idPessoa, cep: this.CEP }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(function (dados) {  }).catch(function (erro) { console.log(erro); })
    fetch('/api/adicionarmenos_btc', { method: 'POST', body: JSON.stringify({ idPessoa: this.idPessoa, valorAdd: item.PRECO }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(function (dados) {  }).catch(function (erro) { console.log(erro); })

    document.getElementById('alertasucesso').style.color = "white"
    document.getElementById('alertasucesso').style.width = "300px"

    setTimeout(function () {
      document.getElementById('alertasucesso').style.color = "transparent"
      document.getElementById('alertasucesso').style.width = "0px"
    }, 2000);

    
    setTimeout(function () {
      document.location.reload();
    }, 150);

    }else{
      document.getElementById('alertaerro').style.color = "white"
      document.getElementById('alertaerro').style.width = "300px"

      setTimeout(function () {
        document.getElementById('alertaerro').style.color = "transparent"
        document.getElementById('alertaerro').style.width = "0px"
      }, 2000);
    }
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
