import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {StatusService} from "../status.service";

@Component({
  selector: 'app-status-drop-down',
  templateUrl: './status-drop-down.component.html',
  styleUrls: ['./status-drop-down.component.css']
})
export class StatusDropDownComponent implements OnInit {

  @Output() statusUpdate = new EventEmitter<String>();

  statuses:String[][];

  constructor(statusService: StatusService) {
    this.statuses = statusService.getAllStatuses();
  }

  ngOnInit() {
  }

  onChange(value) {
    // alert("changed select box value = "+value);
    this.statusUpdate.emit(value)
  }
}
