import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler, NgModule, Optional, SkipSelf } from "@angular/core";
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
        }
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
  