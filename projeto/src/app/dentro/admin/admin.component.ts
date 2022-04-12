import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { 

  }

  nomeproduto = ""
  descricao = ""
  preco = ""
  img64 = localStorage.getItem('img64')
  foto = undefined
  img65 = undefined
  excluir = ""


  ngOnInit() {
  }

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
  ).then(function (result){
    return result.json();
  }).then((dados)=>{
   }).catch(function(erro){
    console.log(erro)
  })
  this.nomeproduto = ""
  this.descricao = ""
  this.preco = ""
  this.foto = undefined
  }

  excluirproduto(){
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
  ).then(function (result){
    return result.json();
  }).then((dados)=>{
   }).catch(function(erro){
    console.log(erro)
  })
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