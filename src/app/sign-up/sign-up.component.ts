import {animate, Component, Inject, OnInit, style, transition, trigger} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [
    trigger('signUpPanel', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
    this.signUpForm = fb.group({
      username: [''],
      password: [''],
      password_confirmation: [''],
      customer: ['']
    });

  }

  ngOnInit() {
  }

  saveNewUser(event) {
    alert(this.signUpForm.value.password+" === "+this.signUpForm.value.password_confirmation);
    if((this.signUpForm.value.password === this.signUpForm.value.password_confirmation) && (this.signUpForm.value.password != null) && (this.signUpForm.value.customer !== 'ADMIN')) {
      this.http.put('/api/user', this.signUpForm.value)
      // ...and calling .json() on the response to return data
        .map((res: Response) => {
          return res.json();
        })
        .subscribe(x => {

          if (x == null || x.error != null) {
            console.log('x == ' + x);
            alert('can not sign up! - ' + JSON.stringify(x));
          } else {
            console.log('x == ' + JSON.stringify(x));
            alert('signed up!');
          }


        });
    } else {
      alert('Paswords do not match!')
    }
  }

}
