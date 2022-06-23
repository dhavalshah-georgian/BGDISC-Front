import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FileUploadRoutes } from "./file-upload-routing.module";
import { FileUploadComponent } from "./file-upload.component";

@NgModule({
    declarations: [
        FileUploadComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(FileUploadRoutes)
    ],
    providers: [],
})

export class FileUploadModule { }