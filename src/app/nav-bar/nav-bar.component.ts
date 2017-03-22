import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Http, Response} from '@angular/http';
import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http, private router: Router) {
    this.loginForm = fb.group({
      username: [''],
      password: ['']
    });

  }

  ngOnInit() {

  }

  loginUser(event) {
    // alert('click happened.');
    this.http.post('/api/user', this.loginForm.value)
                   // ...and calling .json() on the response to return data
                    .map((res: Response) => res.json())
                    .subscribe(x => {

                                        if (x == null || x.err != null)
                                        {
                                          console.log('x == ' + x);
                                            alert('can not log in! - ' + JSON.stringify(x));
                                        } else
                                        {
                                          console.log('x == ' + JSON.stringify(x));
                                            this.router.navigateByUrl('/trailertable');
                                        }


                                    });

  } // end of loginUser(event)

  newUser(event) {
    alert('create new user!');
    this.router.navigateByUrl('/signup');
  }
}
