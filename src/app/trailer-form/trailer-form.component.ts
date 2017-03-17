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
      unitnumber: ["", Validators.required]
    });

  }

  ngOnInit() {
  }

  saveTrailer(event)
  {
    alert('saved trailer!');
  }
}
