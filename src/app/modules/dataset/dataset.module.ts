import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UiSharedModule } from "src/app/ui-shared/ui-shared.module";
import { AddDataComponent } from "./add-data/add-data.component";
import { AdditionalDataComponent } from "./additional-data/additional-data.component";
import { CreateDatasetLayoutComponent } from "./create-dataset-layout/create-dataset-layout.component";
import { CreateDatasetComponent } from "./create-dataset/create-dataset.component";
import { DatasetListComponent } from "./dataset-list/dataset-list.component";
import { DatasetRoutes } from "./dataset-routing.module";
import { DatasetService } from "./dataset.service";
import { ViewDatasetComponent } from "./view-dataset/view-dataset.component";

@NgModule({
    declarations: [
        DatasetListComponent,
        CreateDatasetLayoutComponent,
        CreateDatasetComponent,
        AdditionalDataComponent,
        AddDataComponent,
        ViewDatasetComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(DatasetRoutes),
        UiSharedModule,

        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        DatasetService
    ],
})

export class DatasetModule { }