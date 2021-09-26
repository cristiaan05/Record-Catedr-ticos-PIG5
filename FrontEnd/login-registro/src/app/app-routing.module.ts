import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { RegistroComponent } from "./registro/registro.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes =[
    {path: '', component: RegistroComponent},
    {path: '', component: ChangePasswordComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutinModule{}