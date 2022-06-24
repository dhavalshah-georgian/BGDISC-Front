import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DataSetRoutes } from "./dataset-routing.module";
import { DataSetComponent } from "./dataset.component";
import { TopCardsComponent } from "./dataset-components/top-cards/top-cards.component"; 

@NgModule({
    declarations: [
        DataSetComponent,
        TopCardsComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(DataSetRoutes),
        TopCardsModules
    ],
    providers: [],
})

export class DatasetModule { }