import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";


import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';
import { AppRoutinModule, appRoutingProviders } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ChangePasswordComponent,
    PaginaPrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    HttpClientModule,FormsModule,
    AppRoutinModule
  ],
  providers: [
    AppRoutinModule,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
