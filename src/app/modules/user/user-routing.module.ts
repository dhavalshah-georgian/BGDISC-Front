import { Routes } from "@angular/router";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserListComponent } from "./user-list/user-list.component";

export const UserRoutes: Routes = [
    {
        path: '',
        component: UserListComponent 
    },
    {
        path: '/add',
        component: UserAddComponent 
    }
]