import {animate, Component, Inject, OnInit, style, transition, trigger} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";
import {StatusService} from "../status.service";

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
  public trailerForm: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http,private statusService: StatusService) {
    this.trailerForm = fb.group({
      unitnumber: [''],
      customer: [''],
      account: [''],
      vehicletype: [''],
      location: [''],
      datersnotified: [''],
      estimatedtimeofcompletion: [''],
      status1: [''],
      status2: [''],
      status3: [''],
      note: [''],
      dateauthorized: [''],
      authorizedinitials: ['']
    });

    this.status2Values = this.statusService.getGroup('redlight.png');
    this.status3Values = this.statusService.getGroup('redlight.png');

  }

  ngOnInit() {
  }

  state: string = 'inactive';

  public dt: Date = new Date();

  saveTrailer(event)
  {
    this.http.post('/api/trailers', this.trailerForm.value)
                   // ...and calling .json() on the response to return data
                    .map((res: Response) => res.json())
                    .subscribe(x => {
                                      alert('saved trailer! - ' + JSON.stringify(x));
                                    });

  }

  updateStatus1(event, status)
  {
    if (status === 'status1')
    {
      let colorFileName = 'blanklight.png';
      if (event.indexOf('10%')>-1)
        colorFileName = 'redlight.png';
      else if (event.indexOf('25%')>-1 || event.indexOf('50%')>-1 || event.indexOf('75%')>-1 || event.indexOf('90%')>-1)
        colorFileName = 'yellowlight.png';
      else if (event.indexOf('100%')>-1)
        colorFileName = 'greenlight.png';

      let status23values = this.statusService.getGroup(colorFileName);
      console.table(status23values);
      this.status2Values = this.status3Values = status23values;
    }
    // alert("event fired " + event + '  status == '+status);
  }

  status2Values:string[][];
  status3Values:string[][];
}
