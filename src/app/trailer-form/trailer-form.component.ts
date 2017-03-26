import {animate, Component, Inject, OnInit, style, transition, trigger} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";

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
  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
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
}
