import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DataSetRoutes } from "./dataset-routing.module";
import { DataSetComponent } from "./dataset.component";

@NgModule({
    declarations: [
        DataSetComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(DataSetRoutes)
    ],
    providers: [],
})

export class DatasetModule { }