import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UiSharedModule } from "src/app/ui-shared/ui-shared.module";
import { FileUploadRoutes } from "./file-upload-routing.module";
import { FileUploadComponent } from "./file-upload.component";

@NgModule({
    declarations: [
        FileUploadComponent,
    ],
    exports: [],
    imports: [
        RouterModule.forChild(FileUploadRoutes),
        UiSharedModule
    ],
    providers: [],
})

export class FileUploadModule { }