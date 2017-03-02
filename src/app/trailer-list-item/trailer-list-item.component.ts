import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trailer-list-item',
  templateUrl: './trailer-list-item.component.html',
  styleUrls: ['./trailer-list-item.component.css']
})
export class TrailerListItemComponent implements OnInit {

  @Input() currentTrailer;

  constructor() { }

  ngOnInit() {
  }

}
