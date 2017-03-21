import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http} from "@angular/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
    this.signUpForm = fb.group({
      email: [''],
      password: [''],
      password_confirmation: ['']
    });

  }

  ngOnInit() {
  }

  saveNewUser(event) {
    alert('saved!');
  }

}
