import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class LoginAdminComponent implements OnInit {
  nome = '';
  login = '';
  senha = '';
constructor(private router: Router) { 
}
 

  voltar(){
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

  img = undefined;
  img64 = undefined;
  IDBTC = undefined;

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;    
    };
  }

  registrar() {
    fetch('/api/criar_usuario',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nome: this.nome, nickname: this.login, password: this.senha, img: this.img64
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }
  ).then(function (result){
    return result.json();
  }).then((dados)=>{
    if(dados.erro != 'Erro ao inserir o usuário!'){
      this.router.navigate(['/login'])
    }else{
      document.getElementById('alertaerro').style.color = "white"
      document.getElementById('alertaerro').style.width = "300px"
      setTimeout(function () {
        document.getElementById('alertaerro').style.color = "transparent"
        document.getElementById('alertaerro').style.width = "0px"
      }, 2000);
    }
   }).catch(function(erro){
    console.log(erro)
    document.getElementById('alertaerro').style.color = "white"
    document.getElementById('alertaerro').style.width = "300px"
    setTimeout(function () {
      document.getElementById('alertaerro').style.color = "transparent"
      document.getElementById('alertaerro').style.width = "0px"
    }, 2000);
  })

  fetch('/api/buscar_usuario_especifico',
  {
      method: 'POST',
      body: JSON.stringify(
          {
              nickname: this.login
          }
      ),
      headers: {
          'Content-Type': 'application/json'
      }
  }
).then(function (result){
  return result.json();
}).then((dados)=>{
  this.IDBTC = dados.user.ID
  this.addbtc(this.IDBTC)
 }).catch(function(erro){
  console.log(erro)
})  
}

  addbtc(IDBTC){
    fetch('/api/adicionar_btc', {method: 'POST', body: JSON.stringify({idPessoa: this.IDBTC}), headers: { 'Content-Type': 'application/json'}}).then(function(result){return result.json();}).then(function(dados){}).catch(function(erro){console.log(erro);})
  }

  loginn() {
    document.getElementById('spansenha').style.fontSize = '0px';
    document.getElementById('spannome').style.fontSize = '0px';
    document.getElementById('spanlogin').style.fontSize = '15px';
  }

  senhaa(){
    document.getElementById('spanlogin').style.fontSize = '0px';
    document.getElementById('spannome').style.fontSize = '0px';
    document.getElementById('spansenha').style.fontSize = '15px';
  }

  nomee(){
    document.getElementById('spanlogin').style.fontSize = '0px';
    document.getElementById('spansenha').style.fontSize = '0px';
    document.getElementById('spannome').style.fontSize = '15px';
  }
}

