import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../chekLogged.canActivate';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {path: 'login',
  children: [
  {path: '' , component: PaginaPrincipalComponent},
  {path: 'registro', component: LoginAdminComponent}  ] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [PaginaPrincipalComponent, LoginAdminComponent],
  exports: [LoginAdminComponent],
  providers: [CheckLogged]
})
export class LoginModule { }