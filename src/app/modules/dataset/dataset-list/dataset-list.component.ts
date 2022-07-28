import { Component, OnInit } from "@angular/core";
import { config } from "src/app/config";

@Component({
    selector: 'app-dataset-list',
    templateUrl: './dataset-list.component.html',
    styleUrls: ['./dataset-list.component.scss']
})

export class DatasetListComponent implements OnInit {

    list = [
        {
            id: 1,
            name: "Group 1",
            isActive: true
        },
        {
            id: 2,
            name: "BGDISC group",
            isActive: true
        },
        {
            id: 3,
            name: "Bruce Group",
            isActive: false
        }
    ];
    headers = [
        {
            key: "id",
            text: "Id",
            isSort: true
        },
        {
            key: "name",
            text: "Name",
            isSort: true
        },
        {
            key: "isActive",
            text: "Active",
            isSort: true
        }
    ];
    searchString = '';
    sortSelectList = config.sortSelectList;
    orderSelectList = config.orderSelectList;
    selectedSort = '1';
    selectedOrder = '1';
    isSplit = false;

    constructor() {}

    ngOnInit(): void {
    }

    setEmitData(selected: any, type: string) {
        switch(type) {
            case 'sort':
                this.selectedSort = selected;
                break;
            case 'order':
                this.selectedOrder = selected;
                break;
            case 'search':
                this.searchString = selected;
                break;
            default:
                break;
        }
    }

    onSearchClick() {
        console.log('Sort ', this.selectedSort);
        console.log('Order ', this.selectedOrder);
        console.log('Search String', this.searchString);
    }
}