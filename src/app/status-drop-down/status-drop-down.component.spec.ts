import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {StatusService} from '../status.service';
import {PassTrailerDataService} from '../pass-trailer-data.service';

import { StatusDropDownComponent } from './status-drop-down.component';

describe('StatusDropDownComponent', () => {
  let component: StatusDropDownComponent;
  let fixture: ComponentFixture<StatusDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusDropDownComponent ],
      providers: [ StatusService, PassTrailerDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
