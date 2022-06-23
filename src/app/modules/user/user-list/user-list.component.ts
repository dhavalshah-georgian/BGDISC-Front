import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  
    list = [
        {
            id: 1,
            name: "Matthew Meade",
            role: "Admin"
        },
        {
            id: 2,
            name: "Brad Noble",
            role: "Site Editor"
        },
        {
            id: 3,
            name: "James McKeown",
            role: "Content Editor"
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
            key: "role",
            text: "Role",
            isSort: true
        }
    ];
    searchString = "";

    constructor() {
    }
  
    ngOnInit(): void {
    }
}