import {animate, Component, OnInit, style, transition, trigger} from "@angular/core";

@Component({
  selector: 'app-nav-bar-user-logged-in',
  templateUrl: './nav-bar-user-logged-in.component.html',
  styleUrls: ['./nav-bar-user-logged-in.component.css'],
  animations: [
    trigger('navBarPanel1', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(150)
      ])
    ])
  ]
})
export class NavBarUserLoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
