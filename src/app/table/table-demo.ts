import {Component, OnInit} from '@angular/core';
// import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';
// import {PAGINATION_DIRECTIVES} from '../../../node_modules/ng2-bootstrap/ng2-bootstrap';
import {NgTableFilteringDirective} from '../../../node_modules/ng2-table/components/table/ng-table-filtering.directive';
import {NgTableComponent} from '../../../node_modules/ng2-table/components/table/ng-table.component';
import {NgTableSortingDirective} from '../../../node_modules/ng2-table/components/table/ng-table-sorting.directive';
// import {NG_TABLE_DIRECTIVES} from '../../../node_modules/ng2-table';
import {TableData} from './table-data';

// webpack html imports

@Component({
  selector: 'table-demo',
  templateUrl: './table-demo.html',
  // directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TableDemoComponent implements OnInit {
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'name'},
    {title: 'Position', name: 'position', sort: false},
    {title: 'Office', name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: ''},
    {title: 'Start date', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'position'}
  };

  private data:Array<any> = TableData;

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    if (!config.filtering) {
      return data;
    }

    let filteredData:Array<any> = data.filter((item:any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
