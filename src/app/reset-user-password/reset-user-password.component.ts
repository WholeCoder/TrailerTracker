import {animate, Component, Inject, OnInit, style, transition, trigger} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {TransferUserInfoForPasswordResetService} from '../transfer-user-info-for-password-reset.service';
import {Router} from '@angular/router';

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

  constructor(@Inject(FormBuilder) fb: FormBuilder, private router: Router,
              private http: Http, private tranferUserInfoForPasswordResetService: TransferUserInfoForPasswordResetService) {

    this.username = this.tranferUserInfoForPasswordResetService.username;

    this.resetUserPasswordForm = fb.group({
      password: [''],
      password_confirmation: ['']
    });
  }

  ngOnInit() {
  }

  saveUserPassword(event) {
    this.resetUserPasswordForm.value.id = this.tranferUserInfoForPasswordResetService.id;
    this.http.put('/api/user/resetpassword', (this.resetUserPasswordForm.value))
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .subscribe(x => {
        // alert('this.trailerForm.value' + getProps(this.trailerForm.value));
        this.router.navigateByUrl('/trailertable');
      });

    // alert('saving password! form == ' + this.resetUserPasswordForm.value.id);
  }

}
