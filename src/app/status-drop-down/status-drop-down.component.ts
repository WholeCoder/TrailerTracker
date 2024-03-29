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

  constructor(statusService: StatusService, private passTrailerDataService: PassTrailerDataService) {
    this.statuses = statusService.getAllStatuses();
    this.removeSelectFromAllOptions(statusService);
    this.setProperStatus();
    // alert(this.passTrailerDataService.trailerObject['status']);
  }

  private setProperStatus() {
    for (let i = 0; i < this.statuses.length; i++) {
      if (this.passTrailerDataService.trailerObject['status1'][0].toString() === this.statuses[i][0]) {
        this.statuses[i].push('selected');

        // break;
      } else {
        this.statuses[i].push('');
      }
    }
  }

  private removeSelectFromAllOptions(statusService: StatusService) {
    for (let i = 0; i < this.statuses.length; i++) {
      if (this.statuses[i].length === 5)
        this.statuses[i].splice(this.statuses[i].length - 1, 1);
    }
  }

  ngOnInit() {
  }

  onChange(value) {
    this.statusUpdate.emit(value);
  }
}
