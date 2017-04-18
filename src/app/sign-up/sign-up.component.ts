import {animate, Component, Inject, OnInit, style, transition, trigger} from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

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

  customer: string;
  customers: string[];

  public signUpForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http, private customerService: CustomerService, private router: Router) {
    this.signUpForm = fb.group({
      'username': [''],
      'password': new FormControl(''),
      'password_confirmation': new FormControl(''),
      'customer': new FormControl('')
    });

    this.customers = this.customerService.getCustomers();
    this.customers.splice(0, 1); // Remove ADMIN customer.
  }

  ngOnInit() {
  }

  saveNewUser(event) {
    event.preventDefault();
    function getProps(event)
    {
      let str = '';
      for (const prop in event)
      {
        str += 'obj[' + prop + '] = ' + event[prop] + '\n';
      }
      return str;
    }
    alert(getProps(this.signUpForm.value));
    // alert('passwords == ' + this.signUpForm.value.password + ' === ' + this.signUpForm.value.password_confirmation);
    if ((this.signUpForm.value.password === this.signUpForm.value.password_confirmation) &&
        (this.signUpForm.value.password != null) && (this.signUpForm.value.customer !== 'ADMIN')) {
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
            this.router.navigateByUrl('/');
          }


        });
    } else {
      alert('Paswords do not match!');
    }
  }

}
