import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaoComponent } from './pao/pao.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from '../chekLogged.canActivate';
import { DatePipe } from '@angular/common';


const routes: Routes = [
  {path: 'padaria', canActivate: [CheckLogged],
  children: [
  {path: '' , component: HomeComponent },
  {path: 'produtos', component: PaoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'loginadmin', component: LoginadminComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: ':id', component: ProdutoComponent},
  {path: ':id/compra', component: CompraComponent}
  ] }
];

import { AppComponent } from '../app.component';
import { SobreComponent } from './sobre/sobre.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
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
  declarations: [HomeComponent, PaoComponent, SobreComponent, PerfilComponent, LoginadminComponent, AdminComponent, ProdutoComponent, CarrinhoComponent, CompraComponent],
  exports: [AdminComponent],
  providers: [CheckLogged, DatePipe]  ,
  bootstrap: [AppComponent]

})
export class DentroModule { }

