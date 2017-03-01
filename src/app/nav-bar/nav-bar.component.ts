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
  }
}
