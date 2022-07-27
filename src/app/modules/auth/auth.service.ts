import { Injectable } from "@angular/core";
import { config } from "src/app/config/config";
import { ApiService } from "src/app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})
  
export class AuthService {
  
    constructor(
        private api: ApiService
    ) { }
  
    login(request: any) {
        return this.api.post(config.partialUrls.login, request);
    }
}
  