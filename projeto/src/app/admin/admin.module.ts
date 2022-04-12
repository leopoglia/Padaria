import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminnComponent } from './adminn/adminn.component';

const routes: Routes = [
  {path: 'admin', 
  children: [
  {path: '' , component: AdminnComponent} ] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AdminnComponent, AdminnComponent]
})
export class AdminModule { }
