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

@NgModule({
    declarations: [
        InputComponent,
        LabelComponent,
        SpanComponent,
        TextAreaComponent,
        SelectComponent,
        CheckboxComponent,
        RadioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    exports: [
        InputComponent,
        LabelComponent,
        SpanComponent,
        TextAreaComponent,
        SelectComponent,
        CheckboxComponent,
        RadioComponent
    ]
})
export class UiSharedModule {
}