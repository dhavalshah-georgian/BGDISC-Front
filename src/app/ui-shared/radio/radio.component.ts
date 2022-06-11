import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { CheckData } from '../_model/ui-shared.models';

@Component({
    selector: 'ui-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RadioComponent,
        multi: true
    }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = "";
    @Input() data: CheckData[] = [];
    @Input() value: string = "";

    @Input() disabled = false;
    @Input() required = false;

    @Output() checkInputValue = new EventEmitter();

    constructor() { }

    // This is the initial value set to the component
    // @param value The input value.
    public writeValue(value: any) {
        // this.value = value;
    }

    // Sets a method in order to propagate changes back to the form.
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    public registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    // Sets the disabled state through the model
    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
    onTouched: () => any = () => {
    }

    // Method set in `registerOnChange` to propagate changes back to the form.
    propagateChange = (_: any) => {
    }

    ngOnInit() {
    }

    isChecked(item: string) {
        if (!item || !this.value) {
            return false;
        }
        return this.value.toString().toLowerCase() === item.toString().toLowerCase();
    }

    onCheckClick(item: string) {
        this.value = item;
        this.checkInputValue.emit(this.value);
    }

}
