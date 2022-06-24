import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.scss']
})

export class GroupListComponent implements OnInit {
  
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
    searchString = "";
    
    constructor() {
    }
  
    ngOnInit(): void {
    }
}