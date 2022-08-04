import { Routes } from "@angular/router";
import { UserRoleAddComponent } from "./user-role-add/user-role-add.component";
import { UserRoleEditComponent } from "./user-role-edit/user-role-edit.component";
import { UserRoleComponent } from "./user-role/user-role.component";

export const UserRoleRoutes: Routes = [
    {
        path: "",
        component: UserRoleComponent
    },
    {
        path: "add",
        component: UserRoleAddComponent
    },
    {
        path: "edit",
        component: UserRoleEditComponent
    }
]