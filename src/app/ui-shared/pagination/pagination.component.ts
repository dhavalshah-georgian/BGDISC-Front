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
        switch(type) {
            case 'next':
                if (!this.isLastPage) {
                    this.onPageChange.emit(type);
                }
                break;
            case 'previous':
                if (this.currantPage > 1) {
                    this.onPageChange.emit(type);
                }
                break;
            default:
                break;
        }
    }
}