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
