import { HttpHeaders } from "@angular/common/http";
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
        let httpHeaders: HttpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Accept', 'application/json');
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.api.post(config.partialUrls.login, request, httpHeaders);
    }
}
  