import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'admin', 
  children: [
  {path: '' , component: HomeComponent},
  {path: 'produtos' , component: ProdutoComponent},
  {path: 'usuarios' , component: UsuariosComponent},
 ] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HomeComponent, ProdutoComponent, UsuariosComponent]
})
export class AdminModule { }
