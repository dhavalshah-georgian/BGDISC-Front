import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler, NgModule, Optional, SkipSelf } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { LoaderInterceptorService } from "./interceptors/loader-interceptor.service";
import { TokenInterceptService } from "./interceptors/token.interceptor.service";
import { ApiService } from "./services/api.service";
import { ErrorService } from "./services/error.service";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { LoaderService } from "./services/loader.service";
import { NotificationService } from "./services/notification.service";
import { UtilityService } from "./services/utility.service";

@NgModule({
    imports: [
        HttpClientModule,

        ToastrModule.forRoot({
            timeOut: 10000, // 10 seconds
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right'
        }),
    ],
    declarations: [
    ],
    providers: [
        ApiService,
        UtilityService,
        NotificationService,
        ErrorService,
        // AuthGuard,
        { 
            provide: ErrorHandler, 
            useClass: GlobalErrorHandlerService 
        },
        LoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptService,
            multi: true
        },
    ]
  })
  export class CoreModule {
    constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error(
          'Core Module is already loaded, You should only load CoreModule in AppModule'
        );
      }
    }
  }
  