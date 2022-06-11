import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

export const ProfileRoutes: Routes = [
    {
        path: '',
        component: MyProfileComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    }
]
