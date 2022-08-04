import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UiSharedModule } from "src/app/ui-shared/ui-shared.module";
import { AuthRoutes } from "./auth-routing.module";
import { AuthService } from "./auth.service";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        FormsModule,
        ReactiveFormsModule,
        UiSharedModule
    ],
    providers: [
        AuthService
    ],
})

export class AuthModule { }