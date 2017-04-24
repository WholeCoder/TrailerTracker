import {animate, Component, Inject, OnInit, style, transition, trigger} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';

@Component({
  selector: 'app-reset-user-password',
  templateUrl: './reset-user-password.component.html',
  styleUrls: ['./reset-user-password.component.css'],
  animations: [
    trigger('userPanel', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class ResetUserPasswordComponent implements OnInit {

  public resetUserPasswordForm: FormGroup;
  public username: string;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private http: Http) {

    this.username = '';

    this.resetUserPasswordForm = fb.group({
      password: [''],
      password_confirmation: ['']
    });
  }

  ngOnInit() {
  }

}
