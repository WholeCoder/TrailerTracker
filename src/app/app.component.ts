import { Component } from '@angular/core';
import { MyNewCoonentComponent } from './my-new-coonent/my-new-coonent.component';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppComponent {
  title = 'app works!';
}
