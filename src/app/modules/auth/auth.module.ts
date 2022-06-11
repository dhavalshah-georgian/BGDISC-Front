import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthRoutes } from "./auth-routing.module";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(AuthRoutes)
    ],
    providers: [],
})

export class AuthModule { }