import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardRoutes } from "./dashboard-routing.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(DashboardRoutes)
    ],
})

export class DashboardModule { }