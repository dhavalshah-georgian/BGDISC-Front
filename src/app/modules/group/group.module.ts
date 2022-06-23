import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GroupListComponent } from "./group-list/group-list.component";
import { GroupRoutes } from "./group-routing.module";

@NgModule({
    declarations: [
        GroupListComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(GroupRoutes)
    ],
    providers: [],
})

export class GroupModule { }