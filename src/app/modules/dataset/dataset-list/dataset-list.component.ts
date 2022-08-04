import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { config } from "src/app/config";
import { DatasetList, DatasetListAPIResponse } from "../core/model/dataset.model";
import { DatasetService } from "../dataset.service";

@Component({
    selector: 'app-dataset-list',
    templateUrl: './dataset-list.component.html',
    styleUrls: ['./dataset-list.component.scss']
})

export class DatasetListComponent implements OnInit {

    datasetList: DatasetList[] = [];
    headers = [
        {
            key: "id",
            text: "Id",
            isSort: true
        },
        {
            key: "type",
            text: "Type",
            isSort: true
        },
        {
            key: "title",
            text: "Title",
            isSort: true
        }
    ];
    searchString = '';
    sortSelectList = config.sortSelectList;
    orderSelectList = config.orderSelectList;
    selectedSort = '1';
    selectedOrder = '1';
    isSplit = false;

    perPage = 10;
    currantPage = 1;
    nextPage = 2;
    isCurIsLast = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private datasetService: DatasetService
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params['page']) {
                this.currantPage = params['page'] ? parseInt(params['page'], 10) : 1;
                this.perPage = params['perPage'] ? parseInt(params['perPage'], 10) : 10;
                this.nextPage = this.currantPage + 1;
                this.getDataSet(this.currantPage, this.perPage);
            } else {
                this.newCurrRouterURL();
            }
        });
    }

    newCurrRouterURL() {
        this.router.navigate(['/datasets'], {
            queryParams: {
                page: this.currantPage,
                perPage: this.perPage
            }
        });
    }

    getDataSet(page: number, perPage: number) {
        this.datasetService.getDataSet(page, perPage).subscribe((response) => {
            console.log(response);
            if (page === this.currantPage) {
                if (response.body.length === 0 && page !== 1) {
                    this.currantPage = 1;
                    this.nextPage = this.currantPage + 1;
                    this.newCurrRouterURL();
                }
                this.setListData(response.body);
                if (response.body.length === this.perPage) {
                    this.getDataSet(this.nextPage, this.perPage);
                    this.isCurIsLast = false;
                } else {
                    this.isCurIsLast = true;
                }
            } else {
                if (response.body.length > 0) {
                    this.isCurIsLast = false;
                } else {
                    this.isCurIsLast = true;
                }
            }
        });
    }

    setListData(data: DatasetListAPIResponse[]) {
        this.datasetList = [];
        data.forEach((dataset: DatasetListAPIResponse) => {
            this.datasetList.push(
                {
                    id: parseInt(dataset.nid, 10),
                    type: dataset.type,
                    title: dataset.title,
                    uri: dataset.uri,
                    changed: parseInt(dataset.changed),
                    created: parseInt(dataset.created),
                    status: dataset.status
                }
            );
        });
    }

    setEmitData(selected: any, type: string) {
        switch(type) {
            case 'sort':
                this.selectedSort = selected;
                break;
            case 'order':
                this.selectedOrder = selected;
                break;
            case 'search':
                this.searchString = selected;
                break;
            default:
                break;
        }
    }

    onSearchClick() {
        console.log('Sort ', this.selectedSort);
        console.log('Order ', this.selectedOrder);
        console.log('Search String', this.searchString);
    }

    onPageChangeEmit(type: string) {
        switch (type) {
            case 'previous':
                this.currantPage = this.currantPage - 1;
                this.nextPage = this.currantPage;
                this.newCurrRouterURL();
                break;
            case 'next':
                this.currantPage = this.nextPage;
                this.nextPage = this.nextPage + 1;
                this.newCurrRouterURL();
                break;
            default:
                break;
        }
    }

    onRowClick(data: DatasetList) {
        this.router.navigate([`/datasets/${data.id}/view`]);
    }
}