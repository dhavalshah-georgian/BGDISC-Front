import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ui-span',
    templateUrl: './span.component.html',
    styleUrls: ['./span.component.scss']
})
export class SpanComponent implements OnInit {

    @Input() text = "";
    @Input() class = "";
    constructor() { }

    ngOnInit() {
    }

}