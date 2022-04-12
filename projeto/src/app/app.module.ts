import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import  CheckLogged from './chekLogged.canActivate';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { DentroModule } from './dentro/dentro.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    DentroModule,
    AdminModule,
    RouterModule.forRoot([
      {
      path: '',
      component: MainComponent
      }
    ]),
    
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
