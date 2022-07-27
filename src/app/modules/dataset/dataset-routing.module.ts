import { Routes } from "@angular/router";
import { CreateDatasetLayoutComponent } from "./create-dataset-layout/create-dataset-layout.component";
import { DatasetListComponent } from "./dataset-list/dataset-list.component";

export const DatasetRoutes: Routes = [
    {
        path: '',
        component: DatasetListComponent
    },
    {
        path: 'Create',
        component: CreateDatasetLayoutComponent
    }
]