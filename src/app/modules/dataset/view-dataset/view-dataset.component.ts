import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { DatasetService } from "../dataset.service";
import { switchMap } from "rxjs/operators";

@Component({
    selector: 'app-view-dataset',
    templateUrl: './view-dataset.component.html',
    styleUrls: ['./view-dataset.component.scss']
})

export class ViewDatasetComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private datasetService: DatasetService
    ) {}

    ngOnInit(): void {
        this.getSingleDataSet();
        // this.datasetService.getSingleDataSet(id)
    }

    getSingleDataSet() {
        // this.route.paramMap.pipe(switchMap((params: ParamMap) => {
        //     // this.isDataLoaded = false;
        //     // this.userId = params.get('id');
        //     // const queryParams = this.getObject();
        //     // return this.user.getUsers(queryParams);
        //     return params;
        // })).subscribe(res => {
        //     //this.setUserDetails(res.body.item[0]);
        // }, error => {
        //     if (error.status === 401) {
        //         this.router.navigate(['auth/login']);
        //     }
        // });
    }
}