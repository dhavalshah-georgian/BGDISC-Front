import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { LabelComponent } from "./label/label.component";
import { RadioComponent } from "./radio/radio.component";
import { SelectComponent } from "./select/select.component";
import { SpanComponent } from "./span/span.component";
import { TextAreaComponent } from "./text-area/text-area.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { DtTableModule } from "ngx-dt-table";
import { TableComponent } from "./table/table.component";
import { TableSearchPipe } from "./_core/_pipe/table-search.pipe";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PaginationComponent } from "./pagination/pagination.component";
import { RouterModule } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const materialModules = [
    MatTableModule,
    MatSortModule
];

@NgModule({
    declarations: [
        InputComponent,
        LabelComponent,
        SpanComponent,
        TextAreaComponent,
        SelectComponent,
        CheckboxComponent,
        RadioComponent,
        TableComponent,
        PaginationComponent,
        TableSearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DtTableModule,
        NgbModule,
        ...materialModules
    ],
    providers: [],
    exports: [
        InputComponent,
        LabelComponent,
        SpanComponent,
        TextAreaComponent,
        SelectComponent,
        CheckboxComponent,
        RadioComponent,
        TableComponent,
        PaginationComponent,
        TableSearchPipe
    ]
})
export class UiSharedModule {
}