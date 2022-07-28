import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'ui-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectComponent,
        multi: true
    }]
})
export class SelectComponent implements OnInit {

    @Input() title = "";
    @Input() isDropdown = true;
    @Input() className = "btn-primary";

    @Input() isSplit = true;
    @Input() ArrayList: any = [];

    @Input() value = '';
    @Input() disabled = false;

    @Output() selectedValue = new EventEmitter();

    isDataLoaded = false;

    constructor() { }

    // This is the initial value set to the component
    // @param value The input value.
    public writeValue(value: any) {
        this.value = value;
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
        setTimeout(() => {
            this.setValue();
        });
    }

    setValue() {
        const val = this.value;
        if (val) {
            this.value = val;
        }
        console.log(this.value);
        this.isDataLoaded = true;
    }

    onDropdownClick(obj: any) {
        this.value = obj;
        this.selectedValue.emit(obj);
    }
}