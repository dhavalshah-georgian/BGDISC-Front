import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UiSharedModule } from "src/app/ui-shared/ui-shared.module";
import { GroupListComponent } from "./group-list/group-list.component";
import { GroupRoutes } from "./group-routing.module";

@NgModule({
    declarations: [
        GroupListComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(GroupRoutes),
        UiSharedModule
    ],
    providers: [],
})

export class GroupModule { }