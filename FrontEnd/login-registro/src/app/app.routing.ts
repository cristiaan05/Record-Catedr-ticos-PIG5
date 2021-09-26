import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes =[
    {path: '', component: LoginComponent},
    {path : '', redirectTo : 'login', pathMatch : 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutinModule{}
export const appRoutingProviders : any[] = [];
