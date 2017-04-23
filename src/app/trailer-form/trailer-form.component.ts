import {animate, Component, Inject, OnInit, style, transition, trigger} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {StatusService} from '../status.service';
import {DateModel, DatePickerOptions} from 'ng2-datepicker';
import {PassTrailerDataService} from '../pass-trailer-data.service';
import * as moment from 'moment';
import {CustomerService} from '../customer.service';
import {AccountService} from '../account.service';
import {VehicleTypeService} from '../vehicle-type.service';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';

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

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private http: Http,
              private statusService: StatusService,
              private passTrailerDataService: PassTrailerDataService,
              private customerService: CustomerService,
              private accountService: AccountService,
              private vehicleService: VehicleTypeService,
              private locationService: LocationService,
              private router: Router) {


    this.setProperDropDownValuesForStatus(this.passTrailerDataService.trailerObject['status1'][0], 'status1');
    this.setProperDropDownValuesForStatus(this.passTrailerDataService.trailerObject['status2'][0], 'status2');
    this.setProperDropDownValuesForStatus(this.passTrailerDataService.trailerObject['status3'][0], 'status3');


    this.estimatedtimeofcompletion = new DateModel();
    this.estimatedtimeofcompletion.formatted = this.passTrailerDataService.trailerObject['estimatedtimeofcompletion'];

    this.datersnotified = new DateModel();
    this.datersnotified.formatted = this.passTrailerDataService.trailerObject['datersnotified'];

    this.dateauthorized = new DateModel();
    this.dateauthorized.formatted = this.passTrailerDataService.trailerObject['dateauthorized'];

    this.customers = this.customerService.getCustomers();
    this.accounts = this.accountService.getDefaultAccounts();
    this.vehicletypes = this.vehicleService.getVehicleTypes();
    this.locations = this.locationService.getLocations();

    this.customer = this.passTrailerDataService.trailerObject['customer'][0];
    this.account = this.passTrailerDataService.trailerObject['account'][0];
    this.vehicletype = this.passTrailerDataService.trailerObject['vehicletype'][0];
    this.location = this.passTrailerDataService.trailerObject['location'][0];

    this.passTrailerDataService.trailerObject['authorizedinitials'] = '';
    this.trailerForm = fb.group(this.passTrailerDataService.trailerObject);

    this.options = new DatePickerOptions({
      format: 'MM-DD-YYYY'
    });
  }

  customer: string;
  customers: string[];

  account: string;
  accounts: string[];

  vehicletype: string;
  vehicletypes: string[];

  location: string;
  locations: string[];

  ngOnInit() {
  }

  state: string = 'inactive';

  public dt: Date = new Date();


  saveTrailer(event) {
    event.preventDefault();
    function getProps(obj) {
      let str = '';
      for (const prop in obj) {
        str += 'obj[' + prop + '] = ' + obj[prop] + '\n';
      }
      return str;
    }

    if (this.trailerForm.value.authorizedinitials === null || this.trailerForm.value.authorizedinitials.trim() === '')
      alert('Must enter Initals to Save This Trailer!');
    else {
      if (this.passTrailerDataService.creationMode === 'edit') {
this.trailerForm.value['status1'] = this.status1;
        this.http.put('/api/trailers/', (this.trailerForm.value))
        // ...and calling .json() on the response to return data
          .map((res: Response) => res.json())
          .subscribe(x => {
            // alert('this.trailerForm.value' + getProps(this.trailerForm.value));
            this.router.navigateByUrl('/trailertable');
          });
      } else if (this.passTrailerDataService.creationMode === 'new') {
this.trailerForm.value['status1'] = this.status1;
        // alert('this.trailerForm.value' + this.trailerForm.value);

        this.http.post('/api/trailers/', (this.trailerForm.value))
        // ...and calling .json() on the response to return data
          .map((res: Response) => res.json())
          .subscribe(x => {
            this.router.navigateByUrl('/trailertable');
            // alert('this.trailerForm.value.status1 == ' + getProps(this.trailerForm.value));
          });
      }
    }
  }

  private status1: string;

  setProperDropDownValuesForStatus(event, status) {
// alert('onchange called');
    const colorFileName = this.determineLightColor(event);
    if (status === 'status1') {
      this.status1 = event;
      this.setInitialStatus1And2DropDownValues(colorFileName);
    } else if (status === 'status2') {
      this.removeSelectedFromArraysOfOptions2(colorFileName);
      this.selectOptionForStatusDropDown2(event);
    } else if (status === 'status3') {
      this.removeSelectedFromArraysOfOptions3(colorFileName);
      this.selectOptionForStatusDropDown3(event);
    }
  }

  private setInitialStatus1And2DropDownValues(colorFileName: string) {
    this.status2Values = this.statusService.getGroup(colorFileName);
    this.status3Values = this.statusService.getGroup(colorFileName);
  }

  private selectOptionForStatusDropDown3(event) {
    for (let i = 0; i < this.status3Values.length; i++) {
      if (event === this.status3Values[i][0])
        this.status3Values[i].push('selected');
      else
        this.status3Values[i].push('');
    }
  }

  private removeSelectedFromArraysOfOptions3(colorFileName: string) {
    // this.status3Values = this.statusService.getGroup(colorFileName);
    for (let i = 0; i < this.status3Values.length; i++) {
      if (this.status3Values[i].length === 5)
        this.status3Values[i].splice(this.status3Values[i].length - 1, 1);
    }
  }

  private selectOptionForStatusDropDown2(event) {
    // alert('selecting status2!!!!!!!!!!!!!!!!!! LENGth of statuses == ' + this.status2Values.length);
    let foundOne = false;
    for (let i = 0; i < this.status2Values.length; i++) {
      // alert('condition == \'' + event + '\' == \'' + this.status2Values[i][0] + '\' == ' + (event === this.status2Values[i][0].toString()) );
      if (event === this.status2Values[i][0].toString()) {
        this.status2Values[i].push('selected');
        // alert('status2 selected == ' + this.status2Values[i][0]);
        foundOne  = true;
      }else {
        this.status2Values[i].push('');
      }
      // alert('found one in status2 select drop down ' + foundOne);
    }
  }

  private removeSelectedFromArraysOfOptions2(colorFileName: string) {
    // this.status2Values = this.statusService.getGroup(colorFileName);
    for (let i = 0; i < this.status2Values.length; i++) {
      if (this.status2Values[i].length === 5) {
        // alert('found status2 selected so removing');
        this.status2Values[i].splice(this.status2Values[i].length - 1, 1);
      }
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
