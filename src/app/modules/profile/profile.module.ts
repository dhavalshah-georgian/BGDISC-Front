import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UiSharedModule } from "src/app/ui-shared/ui-shared.module";
import { TableSearchPipe } from "src/app/ui-shared/_core/_pipe/table-search.pipe";
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
        RouterModule.forChild(ProfileRoutes),
        UiSharedModule
    ],
    providers: [
    ],
})

export class ProfileModule { }