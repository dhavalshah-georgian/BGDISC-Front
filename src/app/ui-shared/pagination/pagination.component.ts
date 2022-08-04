import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'ui-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {

    @Input() currantPage = 1;
    @Input() isLastPage = false;

    @Output() onPageChange = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    onPageChangeClick(type: string) {
        this.onPageChange.emit(type);
    }
}