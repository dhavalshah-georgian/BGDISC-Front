import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserRoutes } from "./user-routing.module";

@NgModule({
    declarations: [
        UserListComponent,
        UserAddComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(UserRoutes)
    ],
    providers: [],
})

export class UserModule { }