import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private http: Http, private router: Router) {
    this.loginForm = fb.group({
      username: [""],
      password: [""]
    });

  }

  ngOnInit() {

  }

  loginUser(event) {
    alert('click happened.');
    this.http.post('/api/user', this.loginForm.value)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    .subscribe(x => {
                                        if (x == "null")
                                        {
                                            alert('logged in! - ' + JSON.stringify(x));
                                        } else
                                        {
                                            this.router.navigateByUrl('/trailertable');
                                        }


                                    });

  } // end of loginUser(event)
}
