import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-trailer-form',
  templateUrl: './trailer-form.component.html',
  styleUrls: ['./trailer-form.component.css']
})
export class TrailerFormComponent implements OnInit {
  public trailerForm: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
    this.trailerForm = fb.group({
      unitnumber: [""],
      customer: [""],
      account: [""],
      vehichletype: [""],
      location: [""],
      datersnotified: [""],
      estimatedtimeofcompletion: [""],
      status1: [""],
      status2: [""],
      status3: [""],
      note: [""],
      dateauthorized: [""],
      authorizedinitials: [""]
    });

  }

  ngOnInit() {
  }

  saveTrailer(event)
  {
    this.http.post('/api/trailers', this.trailerForm.value)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    .subscribe(x => {
                                      alert('saved trailer! - ' + JSON.stringify(x));
                                    });

  }
}
