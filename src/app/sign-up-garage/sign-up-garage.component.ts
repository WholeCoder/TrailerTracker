import {animate, Component, Inject, OnInit, style, transition, trigger} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-garage',
  templateUrl: './sign-up-garage.component.html',
  styleUrls: ['./sign-up-garage.component.css'],
  animations: [
    trigger('signUpGaragePanel', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class SignUpGarageComponent implements OnInit {
  public signUpGarageForm: FormGroup;


  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http, private router: Router) {
    this.signUpGarageForm = fb.group({
      'username': [''],
      'password': new FormControl(''),
      'password_confirmation': new FormControl(''),
      'garage': new FormControl('')
    });

  }

  ngOnInit() {
  }

  saveNewGarage(event) {
    if ((this.signUpGarageForm.value.password === this.signUpGarageForm.value.password_confirmation) &&
      (this.signUpGarageForm.value.password != null)) {
      this.http.post('/api/sign_up_new_garage/admin', this.signUpGarageForm.value)
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
            this.router.navigateByUrl('/add_milestone_indicators');
          }


        });
    } else {
      alert('Paswords do not match!');
    }
  }
}
