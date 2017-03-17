import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-trailer-form',
  templateUrl: './trailer-form.component.html',
  styleUrls: ['./trailer-form.component.css']
})
export class TrailerFormComponent implements OnInit {
  public trailerForm: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
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
    alert('saved trailer! - ' + JSON.stringify(this.trailerForm.value));
  }
}
