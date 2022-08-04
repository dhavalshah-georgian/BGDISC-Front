import { Routes } from "@angular/router";
import { CreateDatasetLayoutComponent } from "./create-dataset-layout/create-dataset-layout.component";
import { DatasetListComponent } from "./dataset-list/dataset-list.component";
import { ViewDatasetComponent } from "./view-dataset/view-dataset.component";

export const DatasetRoutes: Routes = [
    {
        path: '',
        component: DatasetListComponent
    },
    {
        path: 'create',
        component: CreateDatasetLayoutComponent
    },
    {
        path: ':id/view',
        component: ViewDatasetComponent
    }
]