import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/config";
import { ApiService } from "src/app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})
  
export class DatasetService {
  
    constructor(
        private api: ApiService
    ) { }

    getDataSet(page: number, pagesize: number) {
        let httpHeaders: HttpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Accept', 'application/json');
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        let queryParams = {
            page, pagesize
        }
        return this.api.get(config.partialUrls.getDatasetList, queryParams, httpHeaders);
    }

    getSingleDataSet(id: string) {
        let httpHeaders: HttpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Accept', 'application/json');
        return this.api.getSingle(config.partialUrls.getSingleDataset.replace('id', id), httpHeaders);
    }
}