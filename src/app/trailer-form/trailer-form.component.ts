import {animate, Component, Inject, OnInit, style, transition, trigger} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {StatusService} from '../status.service';
import {DateModel, DatePickerOptions} from 'ng2-datepicker';
import {PassTrailerDataService} from '../pass-trailer-data.service';
import * as moment from 'moment';
import {CustomerService} from '../customer.service';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-trailer-form',
  templateUrl: './trailer-form.component.html',
  styleUrls: ['./trailer-form.component.css'],
  animations: [
    trigger('trailerPanel', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class TrailerFormComponent implements OnInit {
  datersnotified: DateModel;
  estimatedtimeofcompletion: DateModel;
  dateauthorized: DateModel;

  options: DatePickerOptions;

  public trailerForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http, private statusService: StatusService, private passTrailerDataService: PassTrailerDataService, private customerService: CustomerService, private accountService: AccountService) {

    this.setProperDropDownValuesForStatus(this.passTrailerDataService.trailerObject['status1'][0], 'status1');
    this.setProperDropDownValuesForStatus(this.passTrailerDataService.trailerObject['status2'][0], 'status2');
    this.setProperDropDownValuesForStatus(this.passTrailerDataService.trailerObject['status3'][0], 'status3');

    this.estimatedtimeofcompletion = new DateModel();
    this.estimatedtimeofcompletion.formatted = this.passTrailerDataService.trailerObject['estimatedtimeofcompletion'];

    this.datersnotified = new DateModel();
    this.datersnotified.formatted = this.passTrailerDataService.trailerObject['datersnotified'];

    this.dateauthorized = new DateModel();
    this.dateauthorized.formatted = this.passTrailerDataService.trailerObject['dateauthorized'];

    this.trailerForm = fb.group(this.passTrailerDataService.trailerObject);

    this.options = new DatePickerOptions();

    // <input auto-complete [(ngModel)]="customer" [source]="customers"
    this.customers = this.customerService.getCustomers();
  }
  customer: string;
  customers:string[];

  account: string;
  accounts: string[];

  ngOnInit() {
  }

  state: string = 'inactive';

  public dt: Date = new Date();

  saveTrailer(event) {
    this.http.post('/api/trailers', this.trailerForm.value)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .subscribe(x => {
        // alert('saved trailer! - ' + JSON.stringify(x));
      });

  }



  setProperDropDownValuesForStatus(event, status) {

    const colorFileName = this.determineLightColor(event);

    if (status === 'status1') {
      this.status2Values = this.statusService.getGroup(colorFileName);
      this.status3Values = this.statusService.getGroup(colorFileName);
    } else if (status === 'status2')
    {
      this.removeSelectedFromArrayOfOptions(colorFileName);
      this.selectOptionForStatusDropDown2(event);
    } else if (status === 'status3')
    {
      this.removeSelectedFromArraysOfOptions(colorFileName);
      this.selectOptionForStatusDropDown3(event);
    }
  }

  private selectOptionForStatusDropDown3(event) {
    for (let i = 0; i < this.status3Values.length; i++) {
      if (event === this.status3Values[i][0])
        this.status3Values[i].push('selected');
      else
        this.status3Values[i].push('');
    }
  }

  private removeSelectedFromArraysOfOptions(colorFileName: string) {
    this.status3Values = this.statusService.getGroup(colorFileName);
    for (let i = 0; i < this.status3Values.length; i++) {
      if (this.status3Values[i].length === 5)
        this.status3Values[i].splice(this.status3Values[i].length - 1, 1);
    }
  }

  private selectOptionForStatusDropDown2(event) {
    for (let i = 0; i < this.status2Values.length; i++) {
      if (event === this.status2Values[i][0])
        this.status2Values[i].push('selected');
      else
        this.status2Values[i].push('');
    }
  }

  private removeSelectedFromArrayOfOptions(colorFileName: string) {
    this.status2Values = this.statusService.getGroup(colorFileName);
    for (let i = 0; i < this.status2Values.length; i++) {
      if (this.status2Values[i].length === 5)
        this.status2Values[i].splice(this.status2Values[i].length - 1, 1);
    }
  }

  private determineLightColor(event) {
    let colorFileName = 'blanklight.png';

    const is10Percent = event.indexOf('10%') > -1;
    const is25to90Percent = event.indexOf('25%') > -1 || event.indexOf('50%') > -1 || event.indexOf('75%') > -1 || event.indexOf('90%') > -1;
    const is100Percent = event.indexOf('100%') > -1;

    if (is10Percent)
      colorFileName = 'redlight.png';
    else if (is25to90Percent)
      colorFileName = 'yellowlight.png';
    else if (is100Percent)
      colorFileName = 'greenlight.png';

    return colorFileName;
  }

  status2Values: string[][];
  status3Values: string[][];
}
