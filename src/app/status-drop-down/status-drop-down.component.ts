import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {StatusService} from '../status.service';
import {PassTrailerDataService} from '../pass-trailer-data.service';

@Component({
  selector: 'app-status-drop-down',
  templateUrl: './status-drop-down.component.html',
  styleUrls: ['./status-drop-down.component.css']
})
export class StatusDropDownComponent implements OnInit {

  @Output() statusUpdate = new EventEmitter<String>();
  @Input() name: string;

  statuses: String[][];

  constructor(statusService: StatusService, passTrailerDataService: PassTrailerDataService) {
    this.statuses = statusService.getAllStatuses();
    for (let i = 0; i < this.statuses.length; i++) {
      if (this.statuses[i].length === 5)
        this.statuses[i].splice(this.statuses[i].length-1, 1);
    }
    for (let i = 0; i < this.statuses.length; i++) {
      // alert(typeof(passTrailerDataService.trailerObject['status1'].toString()) + ' === ' + typeof(this.statuses[i][0]));
      if (passTrailerDataService.trailerObject['status1'].toString() === this.statuses[i][0]) {
        this.statuses[i].push('selected');
        alert('selected one');
        break;
      } else {
        this.statuses[i].push('');
      }
    }
  }

  ngOnInit() {
  }

  onChange(value) {
    this.statusUpdate.emit(value);
  }
}
