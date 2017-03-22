import {Component, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http) {
    this.signUpForm = fb.group({
      username: [''],
      password: [''],
      password_confirmation: ['']
    });

  }

  ngOnInit() {
  }

  saveNewUser(event) {
    this.http.put('/api/user', this.signUpForm.value)
    // ...and calling .json() on the response to return data
      .map((res: Response) => {
        return res.json();
      })
      .subscribe(x => {

        if (x == null || x.err != null)
        {
          console.log('x == ' + x);
          alert('can not log in! - ' + JSON.stringify(x));
        } else
        {
          console.log('x == ' + JSON.stringify(x));
          // this.router.navigateByUrl('/trailertable');
          alert('signed up!');
        }


      });

  }

}
