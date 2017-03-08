import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
                // private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {

  }

  clicked(event) {
    this.router.navigateByUrl('/trailertable');
    $http({
      method: 'GET',
      url: '/server/api'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  } // end of clicked(event)
}
