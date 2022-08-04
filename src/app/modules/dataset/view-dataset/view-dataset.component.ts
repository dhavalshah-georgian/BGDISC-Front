import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { DatasetService } from "../dataset.service";
import { switchMap } from "rxjs/operators";
import { DatasetListAPIResponse } from "../core/model/dataset.model";

@Component({
    selector: 'app-view-dataset',
    templateUrl: './view-dataset.component.html',
    styleUrls: ['./view-dataset.component.scss']
})

export class ViewDatasetComponent implements OnInit {

    selectedDataSetId: string | null = '';
    isDataLoaded = false;
    datasetDetails: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private datasetService: DatasetService
    ) {}

    ngOnInit(): void {
        this.getSingleDataSet();
    }

    getSingleDataSet() {
        this.route.paramMap.pipe(switchMap((params: ParamMap) => {
            this.selectedDataSetId = params.get('id') ? params.get('id') : '1';
            this.isDataLoaded = false;
            return this.datasetService.getSingleDataSet(this.selectedDataSetId ? this.selectedDataSetId.toString() : '1');
        })).subscribe(res => {
            this.setDatasetDetails(res.body);
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }

    setDatasetDetails(data: DatasetListAPIResponse) {
        this.datasetDetails = data;
        for (let key in this.datasetDetails) {
            switch(key) {
                case 'created':
                case 'changed':
                    this.datasetDetails[key] = new Date(parseInt(this.datasetDetails[key]) * 1000);
                    break;
                default:
                    break;
            }
        }
        this.isDataLoaded = true;
        console.log(this.datasetDetails);
    }

    onLinkClick(url: string) {
        window.open(url, '_blank')
    }
}