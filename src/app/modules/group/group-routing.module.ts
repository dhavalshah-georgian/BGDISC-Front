import { Routes } from "@angular/router";
import { GroupAddComponent } from "./group-add/group-add.component";
import { GroupListComponent } from "./group-list/group-list.component";

export const GroupRoutes: Routes = [
    {
        path: '',
        component: GroupListComponent 
    },
    {
        path: 'add',
        component: GroupAddComponent
    }
]