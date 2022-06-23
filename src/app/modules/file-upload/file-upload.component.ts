import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {

    list = [
        {
            id: 1,
            name: "File 1",
            path: "",
            type: "Document",
            size: "52 KB",
            author: "Brad Noble"
        },
        {
            id: 2,
            name: "File 2",
            path: "",
            type: "Image",
            size: "25 KB",
            author: "James McKeown"
        },
        {
            id: 3,
            name: "File 3",
            path: "",
            type: "Document",
            size: "150 MB",
            author: "Matthew Meade"
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
            key: "type",
            text: "Type",
            isSort: true
        },
        {
            key: "author",
            text: "Author",
            isSort: true
        },
        {
            key: "size",
            text: "Size",
            isSort: true
        }
    ];
    searchString = "";
  
    constructor() {
    }
  
    ngOnInit(): void {
    }
}