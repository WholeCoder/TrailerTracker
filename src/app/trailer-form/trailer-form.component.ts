import {animate, Component, Inject, OnInit, style, transition, trigger} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {StatusService} from '../status.service';
import {DateModel, DatePickerOptions} from 'ng2-datepicker';
import {PassTrailerDataService} from '../pass-trailer-data.service';

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

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http, private statusService: StatusService, private passTrailerDataService: PassTrailerDataService) {
    this.trailerForm = fb.group(passTrailerDataService.trailerObject);

    this.status2Values = this.statusService.getGroup('blanklight.png');
    this.status3Values = this.statusService.getGroup('blanklight.png');

    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

  state: string = 'inactive';

  public dt: Date = new Date();

  saveTrailer(event) {
    this.http.post('/api/trailers', this.trailerForm.value)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .subscribe(x => {
        alert('saved trailer! - ' + JSON.stringify(x));
      });

  }

  updateStatus1(event, status) {
    if (status === 'status1') {
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

      const status23values = this.statusService.getGroup(colorFileName);
      this.status2Values = this.status3Values = status23values;
    }
    // alert("event fired " + event + '  status == '+status);
  }

  status2Values: string[][];
  status3Values: string[][];
}
