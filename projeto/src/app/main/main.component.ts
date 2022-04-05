import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }
  ngOnInit() {
    localStorage.removeItem('login');
    localStorage.removeItem('senha');
    localStorage.removeItem('img64');
    localStorage.removeItem('img65');
    this.router.navigate(['/'])
  }
  entrar(){
    this.router.navigate(['login']);

  }
}