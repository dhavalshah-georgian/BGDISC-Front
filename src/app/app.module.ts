import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiSharedModule } from './ui-shared/ui-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { RouterModule } from '@angular/router';
import { TableSearchPipe } from './ui-shared/_core/_pipe/table-search.pipe';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        AuthLayoutComponent,
        NavigationComponent,
        SidebarComponent,

    ],
    imports: [
        RouterModule.forRoot(AppRoutes),

        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        UiSharedModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        CoreModule

    ],
    providers: [
        TableSearchPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
