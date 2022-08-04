import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { TableSearchPipe } from "../_core/_pipe/table-search.pipe";
import { TableActions, TableHeader, TablePage } from "../_model/ui-shared.models";

@Component({
    selector: 'ui-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

    @Input() headerList: TableHeader[] = [];
    @Input() masterList: any;
    @Input() searchString: string = '';

    @Input() perPage: number = 10;
    @Input() currentPage: number = 1;

    isDataLoaded = false;

    constructor(
        private tableSearch: TableSearchPipe,
        private router: Router,
    ){ }

    ngOnInit(): void {
        setTimeout(() => {
            this.isDataLoaded = true;
        });
    }

    onRowClick(data: any) {
        this.router.navigate([`/datasets/${data.id}/view`]);
    }

    // @Input() headerList: TableHeader[] = [];
    // @Input() masterList: any;
    // @Input() rowsOnPage: number = 1;
    // @Input() searchString: string = '';
    // @Input() searchFrom = [];
    // @Input() actions: TableActions[] = [];
  
    // @Output() actionOutput = new EventEmitter();
  
    // list: any;
    // searchedData: any;
    // filterQuery = '';
    // sortBy = '';
    // sortOrder = 'desc';
  
    // fIndex = 0;
    // lIndex = 0;
    // totalNo = 0;
  
    // prePage = null;
    // curPage = 1;
    // nxtPage = 2;
  
    // constructor(
    //   private tableSearch: TableSearchPipe,
    //   private router: Router,
    // ) {}
  
    // ngOnInit() {
    //   // setTimeout(() => {
    //   //   if (Array.isArray(this.masterList)) {
    //   //     this.searchedData = this.tableSearch.transform(this.masterList, this.searchString, this.searchFrom);
    //   //     if (!this.rowsOnPage) {
    //   //       // this.rowsOnPage = this.masterList.length;
    //   //       this.rowsOnPage = this.searchedData.length;
    //   //     }
    //   //     this.setListVideos(1);
    //   //   }
    //   // });
    // }
  
    // ngOnChanges() {
    //     // this.searchedData = this.tableSearch.transform(this.masterList, this.searchString, this.searchFrom);
    //     this.setListVideos(1);
    // }
  
    // onPageSetUP(type: any) {
    //     switch (type) {
    //         case 'first':
    //             this.setListVideos(1);
    //         break;
    //         case 'prev':
    //             this.setListVideos(this.prePage);
    //         break;
    //         case 'next':
    //             this.setListVideos(this.nxtPage);
    //         break;
    //         case 'last':
    //             const num = this.totalNo / (this.rowsOnPage ? 1 : this.rowsOnPage);
    //             if (this.checkIntValue(num)) {
    //                 this.setListVideos(num);
    //             } else {
    //                 this.setListVideos(parseInt(num.toString(), 10) + 1);
    //             }
    //         break;
    //         default:
    //         break;
    //     }
    // }
    
    // setListVideos(currentPage: any) {
    //     this.list = [];
    //     const limit = (currentPage) * this.rowsOnPage;
    //     for (let i = (((currentPage - 1) * this.rowsOnPage)); i < limit; i++) {
    //         if (this.searchedData) {
    //             if (!!this.searchedData ? this.searchedData[i] : false) {
    //                 this.list.push(this.searchedData[i]);
    //             }
    //         }
    //     }
    //     this.setFooters(currentPage);
    // }

    // setFooters(current: any) {
    //     this.totalNo = !!this.searchedData ? this.searchedData.length : 0;
    //     this.fIndex = ((current - 1) * this.rowsOnPage) + 1;
    //     this.lIndex = (this.fIndex + (this.rowsOnPage - 1) > this.totalNo) ?
    //     this.totalNo : this.fIndex + (this.rowsOnPage - 1);
  
    //     this.curPage = current;
    //     // if (current === 1) {
    //     //   this.prePage = null;
    //     // } else {
    //     //   this.prePage = current - 1;
    //     // }
    //     //
    //     // if (this.rowsOnPage >= this.totalNo) {
    //     //   this.nxtPage = null;
    //     // } else {
    //     //   if (this.lIndex === this.totalNo) {
    //     //     this.nxtPage = null;
    //     //   } else {
    //     //     if (this.lIndex < this.totalNo) {
    //     //       this.nxtPage = current + 1;
    //     //     } else {
    //     //       this.nxtPage = null;
    //     //     }
    //     //   }
    //     // }
    // }
    // checkIntValue(num: any) {
    //     return parseInt(num, 10) === num;
    // }
  
    // onActionClick(actionType: any, row: any) {
    //     this.actionOutput.emit({
    //         type: actionType,
    //         data: row
    //     });
    // }
}