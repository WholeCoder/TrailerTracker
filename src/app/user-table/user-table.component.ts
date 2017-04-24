import {animate, Component, OnInit, style, transition, trigger} from '@angular/core';
import {TrailerService} from '../trailer.service';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  animations: [
    trigger('trailerTablePanel', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
  // directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class UserTableComponent implements OnInit {
  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'User Name', name: 'username'},
    {title: 'Customer', name: 'customer'},
    {title: '', name: 'resetspace'}
  ];

  state: string = 'inactive';

  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'username'}
  };


  private data: Object[] = [];
  private dataObsv: Observable<any>;

  public constructor(private userService: UserService, private http: Http, private router: Router) {
    // ...using get request
    const that = this;
    this.data = userService.getUsers();
    /*this.http.get('/api/trailers')
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .subscribe(x => {
        this.data = x;
        this.length = x.length;
        this.onChangeTable(this.config);
      });*/
  }

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public createNewUser(event) {
    event.preventDefault();
    alert('creating new user!');
/*
    this.passTrailerDataService.resetAllFields();
    this.passTrailerDataService.creationMode = 'new';
    this.router.navigateByUrl('/newtrailer');
*/
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    console.log(page);
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

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
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    const filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;


    for (let i = 0; i < this.rows.length; i++) {
      this.rows[i].resetspace = '<button type="submit">Reset Password</button>';
    }

  }



  onCellClick($event) {
    const that = this;
    if ($event.column === 'resetspace') {
      this.router.navigateByUrl('/resetuserpassword');
    }
  }
}
