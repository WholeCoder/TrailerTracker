import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer-form',
  templateUrl: './trailer-form.component.html',
  styleUrls: ['./trailer-form.component.css']
})
export class TrailerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveTrailer(event)
  {
    alert('saved trailer!');
  }
}
