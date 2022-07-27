import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UiSharedModule } from "src/app/ui-shared/ui-shared.module";
import { UserRoleRoutes } from "./setting-routing.module";
import { UserRoleAddComponent } from "./user-role-add/user-role-add.component";
import { UserRoleEditComponent } from "./user-role-edit/user-role-edit.component";
import { UserRoleComponent } from "./user-role/user-role.component";

@NgModule({
    declarations: [
        UserRoleComponent,
        UserRoleAddComponent,
        UserRoleEditComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(UserRoleRoutes),
        UiSharedModule
    ],
    providers: [],
})

export class SettingModule { }