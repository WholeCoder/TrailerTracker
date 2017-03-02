import { Component, OnInit } from '@angular/core';
import { TrailerService } from '../trailer.service'

@Component({
  selector: 'app-trailer-table',
  templateUrl: './trailer-table.component.html',
  styleUrls: ['./trailer-table.component.css']
})
export class TrailerTableComponent implements OnInit {

  constructor(private trailerService: TrailerService) {
    let trlr = trailerService.getTrailers()[0];
    console.log('trailers == ' + trlr.account);
  }

  ngOnInit() {
  }

}
