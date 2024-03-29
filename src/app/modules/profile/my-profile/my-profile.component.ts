import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

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
    sortSelectList = config.sortSelectList;
    orderSelectList = config.orderSelectList;

    constructor() {
    }

    ngOnInit(): void {
      
    }
}
