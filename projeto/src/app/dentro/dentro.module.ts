import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaoComponent } from './pao/pao.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from '../chekLogged.canActivate';


const routes: Routes = [
  {path: 'padaria', canActivate: [CheckLogged],
  children: [
  {path: '' , component: HomeComponent },
  {path: 'produtos', component: PaoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: ':id', component: ProdutoComponent},
  {path: ':id/compra', component: CompraComponent}
  ] }
];

import { AppComponent } from '../app.component';
import { SobreComponent } from './sobre/sobre.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminComponent } from './admin/admin.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraComponent } from './compra/compra.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  declarations: [HomeComponent, PaoComponent, SobreComponent, PerfilComponent, AdminComponent, ProdutoComponent, CarrinhoComponent, CompraComponent],
  exports: [AdminComponent],
  bootstrap: [AppComponent]

})
export class DentroModule { }

