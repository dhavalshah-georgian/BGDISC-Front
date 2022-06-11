import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { ProfileRoutes } from "./profile-routing.module";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
    declarations: [
        MyProfileComponent,
        ResetPasswordComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(ProfileRoutes)
    ],
    providers: [],
})

export class ProfileModule { }